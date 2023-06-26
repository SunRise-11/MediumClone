package com.cleanread.company.common.util;

import org.apache.commons.lang3.StringUtils;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;
import org.springframework.stereotype.Component;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Component
public class MarkdownUtil {

//    public int calculateReadingTime(String content) {
//        Parser parser = Parser.builder().build();
//        HtmlRenderer renderer = HtmlRenderer.builder().build();
//        String markdownContent = renderer.render(parser.parse(content));
//
//        // Metin içerisindeki karakter, kelime ve paragraf sayılarını hesaplıyoruz
//        int charCount = StringUtils.countMatches(markdownContent, "");
//        int wordCount = markdownContent.split("\\s+").length;
//        int paragraphCount = StringUtils.countMatches(markdownContent, "");
//
//        // Okuma süresini hesaplıyoruz
//        int readingTimeMinutes = (int) Math.ceil(wordCount / 200.0);
//
//        return readingTimeMinutes;
//    }
    public int calculateReadingTime(String content) {
        Parser parser = Parser.builder().build();
        HtmlRenderer renderer = HtmlRenderer.builder().build();
        String markdownContent = renderer.render(parser.parse(content));

        // Metin içerisindeki karakter, kelime ve paragraf sayılarını hesaplıyoruz
        int charCount = StringUtils.countMatches(markdownContent, "");
        int wordCount = StringUtils.countMatches(markdownContent, "\\w+");
        int paragraphCount = StringUtils.countMatches(markdownContent, "\\n\\s*\\n");

        // Okuma süresini hesaplıyoruz
        double averageReadingSpeed = 200.0; // 200 kelime/dakika (ortalama okuma hızı)
        int readingTimeMinutes = (int) Math.ceil(wordCount / averageReadingSpeed);

        // Paragraf sayısına göre okuma süresini güncelleme
        double averageParagraphReadingTime = 1.5; // Her paragraf için 1.5 dakika ortalama süre
        readingTimeMinutes += (int) Math.ceil(paragraphCount * averageParagraphReadingTime);

        // Karakter sayısına göre okuma süresini güncelleme
        double averageCharReadingTime = 0.01; // Her karakter için 0.01 dakika ortalama süre
        readingTimeMinutes += (int) Math.ceil(charCount * averageCharReadingTime);

        return readingTimeMinutes;
    }
}
