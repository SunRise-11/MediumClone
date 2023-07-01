package com.cleanread.company.service.Impl;

import com.cleanread.company.service.FileService;
import com.cloudinary.Cloudinary;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Slf4j
@Service
@AllArgsConstructor
public class FileServiceImpl implements FileService {
    private final Cloudinary cloudinary;

    public String uploadImage(MultipartFile file) throws IOException {
        return cloudinary.uploader().upload(file.getBytes(),
                        Map.of("public_id", UUID.randomUUID().toString()))
                .get("secure_url")
                .toString();
    }
}
