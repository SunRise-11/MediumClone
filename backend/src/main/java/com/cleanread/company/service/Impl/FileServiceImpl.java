package com.cleanread.company.service.Impl;

import com.cleanread.company.common.config.AppEnv;
import com.cleanread.company.service.FileService;
import lombok.extern.slf4j.Slf4j;
import org.apache.tika.Tika;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.UUID;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Slf4j
@Service
public class FileServiceImpl implements FileService {
    private final AppEnv appEnv;
    private final Tika tika;

    public FileServiceImpl(AppEnv appEnv) {
        this.appEnv = appEnv;
        tika = new Tika();
    }


    public String saveImageWithEncode(String image) {
        String fileName = generateRandomName();
        byte[] decodedImage = Base64.getDecoder().decode(image);
        try (FileOutputStream fos = new
                FileOutputStream(appEnv.getProfileImagePath().concat(File.separator).concat(fileName))) {
            fos.write(decodedImage);
        } catch (FileNotFoundException exception) {
            log.error("FileNotFoundException: {}", exception);
        } catch (IOException exception) {
            log.error("IOException: {}", exception);
        }
        return fileName;
    }

    private String generateRandomName() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }

    public void deleteProfileImage(String oldImageName) {
        if (oldImageName == null)
            return;
        String filePath = appEnv.getProfileImagePath() + "/" + oldImageName;
        deleteFile(Paths.get(filePath));
    }

    private void deleteFile(Path path) {
        if (path == null)
            return;
        try {
            Files.deleteIfExists(path);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public String detectFile(byte[] arr) {
        return tika.detect(arr);
    }

    public String detectFileType(String image) {
        byte[] base64Encoded = Base64.getDecoder().decode(image);
        log.info(String.valueOf(base64Encoded));
        return detectFile(base64Encoded);
    }
}
