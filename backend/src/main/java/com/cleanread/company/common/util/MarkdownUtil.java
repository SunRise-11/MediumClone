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

    public int calculateReadingTime(String content) {
        Parser parser = Parser.builder().build();
        HtmlRenderer renderer = HtmlRenderer.builder().build();
        String markdownContent = renderer.render(parser.parse(content));

        int charCount = StringUtils.countMatches(markdownContent, "");
        int wordCount = markdownContent.split("\\s+").length;
        int paragraphCount = StringUtils.countMatches(markdownContent, "");


        double averageReadingSpeed = 200.0;
        int readingTimeMinutes = (int) Math.ceil(wordCount / averageReadingSpeed);


        double averageParagraphReadingTime = 1.5;
        readingTimeMinutes += (int) Math.ceil(paragraphCount * averageParagraphReadingTime);


        double averageCharReadingTime = 0.01;
        readingTimeMinutes += (int) Math.ceil(charCount * averageCharReadingTime);

        return readingTimeMinutes == 0 ? 1 : readingTimeMinutes;
    }
}
