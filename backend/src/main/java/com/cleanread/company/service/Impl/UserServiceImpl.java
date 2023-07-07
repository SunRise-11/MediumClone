package com.cleanread.company.service.Impl;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.User;
import com.cleanread.company.exceptions.ImageUploadException;
import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.model.request.RegisterRequest;
import com.cleanread.company.model.request.UserUpdateRequest;
import com.cleanread.company.repository.RoleRepository;
import com.cleanread.company.repository.UserRepository;
import com.cleanread.company.service.UserService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Slf4j
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final FileServiceImpl fileServiceImpl;
    private final ObjectMapper objectMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public User registerUser(RegisterRequest request) {
        User inDB = objectMapper.mapForRequest(request, User.class);
        inDB.setPassword(passwordEncoder.encode(request.getPassword()));
        return userRepository.save(inDB);
    }

    @Override
    public User updateUser(UserUpdateRequest request, Long userId) {
        User inDB = getUserById(userId);

        if (request.getPassword() != null)
            inDB.setPassword(passwordEncoder.encode(request.getPassword()));
        if (request.getBio() != null)
            inDB.setBio(request.getBio());
        if (request.getEmail() != null)
            inDB.setEmail(request.getEmail());
        if (request.getUsername() != null)
            inDB.setUsername(request.getUsername());

        return userRepository.save(inDB);
    }

    @Override
    public Page<User> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public void deleteUser(Long userId) {
        userRepository.findById(userId)
                .ifPresentOrElse(
                        userRepository::delete,
                        () -> {
                            throw new ResourceNotFoundException("User", "userId", String.valueOf(userId));
                        }
                );
    }

    @Override
    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(
                () -> new ResourceNotFoundException("User", "Email", email));
        return user;
    }

    @Override
    public User getUserById(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("User", "userId", String.valueOf(userId)));
        return user;
    }

    @Override
    public User findByUsername(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new ResourceNotFoundException("User", "username", username));
        return user;
    }

    @Override
    public void updateProfileImage(Long userId, MultipartFile file) {
        if (!isValidImageType(file)) {
            throw new ImageUploadException("Geçersiz resim türü. Sadece JPEG ve PNG desteklenir.");
        }
        User user = getUserById(userId);
        String oldImage = user.getImage();

        String imageName = uploadImage(file);
        user.setImage(imageName);

        userRepository.save(user);
    }

    private boolean isValidImageType(MultipartFile file) {
        String contentType = file.getContentType();
        return contentType != null && (contentType.equals("image/jpeg") || contentType.equals("image/png"));
    }

    private String uploadImage(MultipartFile file) {
        try {
            return fileServiceImpl.uploadImage(file);
        } catch (IOException e) {
            throw new ImageUploadException(e.getMessage());
        }
    }
}
