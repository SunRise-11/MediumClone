package com.cleanread.company.model.response;

import lombok.Builder;
import lombok.Data;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@Builder
public class LoginResponse {
    private Long userId;
    private String username;
    private String email;
    private String bio;
    private String image;
    private boolean isEmailVerified;
    private String accessToken;
    private String refreshToken;
}