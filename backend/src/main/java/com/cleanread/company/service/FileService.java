package com.cleanread.company.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @project: backend
 * @author: Sarvar55
 */
public interface FileService {
    String uploadImage(MultipartFile file) throws IOException;
}
