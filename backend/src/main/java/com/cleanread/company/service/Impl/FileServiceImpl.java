package com.cleanread.company.service.Impl;

import com.cleanread.company.common.config.AppEnv;
import com.cleanread.company.exceptions.ImageUploadException;
import com.cleanread.company.service.FileService;
import com.cloudinary.Cloudinary;
import lombok.extern.slf4j.Slf4j;
import org.apache.tika.Tika;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Map;
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
    private final Cloudinary cloudinary;

    public FileServiceImpl(AppEnv appEnv, Cloudinary cloudinary) {
        this.appEnv = appEnv;
        this.cloudinary = cloudinary;
        tika = new Tika();
    }

    public String uploadImage(MultipartFile file, String imageName) {
        try {
            File targetDirectory = new File(appEnv.getProfileImagePath());
            if (!targetDirectory.exists()) {
                targetDirectory.mkdirs();
            }

            File targetFile = new File(targetDirectory, imageName);

            OutputStream outputStream = new FileOutputStream(targetFile);
            outputStream.write(file.getBytes());
            outputStream.close();

            return imageName;
        } catch (IOException e) {
            throw new ImageUploadException(e.getMessage());
        }
    }

    public String uploadImage(MultipartFile file) throws IOException {
        return cloudinary.uploader().upload(file.getBytes(),
                        Map.of("public_id", UUID.randomUUID().toString()))
                .get("secure_url")
                .toString();
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
