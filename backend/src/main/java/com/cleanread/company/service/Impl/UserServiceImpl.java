package com.cleanread.company.service.Impl;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.Role;
import com.cleanread.company.entity.User;
import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.model.enums.ERole;
import com.cleanread.company.model.request.RegisterRequest;
import com.cleanread.company.model.request.UpdateProfileImageRequest;
import com.cleanread.company.model.request.UserUpdateRequest;
import com.cleanread.company.repository.RoleRepository;
import com.cleanread.company.repository.UserRepository;
import com.cleanread.company.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

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
        Role role = roleRepository.findByRoleName(ERole.USER);
        inDB.setRoles(Set.of(role));
        return userRepository.save(inDB);
    }

    @Override
    public User updateUser(UserUpdateRequest request, Long userId) {
        User inDB = getUserById(userId);
        User updatedUser = objectMapper.mapForRequest(request, User.class);
        updatedUser.setId(inDB.getId());
        return userRepository.save(updatedUser);
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
    public void updateProfileImage(Long userId, UpdateProfileImageRequest request) {
        User user = getUserById(userId);
        String url = uploadImage(request.getImage());
        user.setImage(url);
        userRepository.save(user);
    }

    private String uploadImage(String file) {
        try {
            return fileServiceImpl.saveImageWithEncode(file);
        } catch (Exception e) {
            log.info("Upload Image Exception:{}", e);
            return null;
        }
    }
}
