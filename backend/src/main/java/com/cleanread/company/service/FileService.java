package com.cleanread.company.service;

/**
 * @project: backend
 * @author: Sarvar55
 */
public interface FileService {
    String saveImageWithEncode(String image);

    void deleteProfileImage(String oldImageName);

    String detectFile(byte[] arr);

    String detectFileType(String image);
}
