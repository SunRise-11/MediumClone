package com.cleanread.company.service;

import org.springframework.web.multipart.MultipartFile;

/**
 * @project: backend
 * @author: Sarvar55
 */
public interface FileService {

    String uploadImage(MultipartFile file, String image);

    void deleteProfileImage(String oldImageName);

    String detectFile(byte[] arr);

    String detectFileType(String image);
}
