package com.cleanread.company.service;

import com.cleanread.company.entity.User;
import com.cleanread.company.model.request.RegisterRequest;
import com.cleanread.company.model.request.UserUpdateRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */
public interface UserService {
    User registerUser(RegisterRequest request);

    User updateUser(UserUpdateRequest request, Long userId);

    Page<User> findAll(Pageable pageable);

    List<User> findAll();

    void deleteUser(Long userId);

    User findByEmail(String email);

    User getUserById(Long userId);

    User findByUsername(String username);

    void updateProfileImage(Long userId, MultipartFile file);

}
