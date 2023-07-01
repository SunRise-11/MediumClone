package com.cleanread.company.service;

import com.cleanread.company.model.request.LoginRequest;
import com.cleanread.company.model.request.RefreshTokenRequest;
import com.cleanread.company.model.response.GenericResponse;
import com.cleanread.company.model.response.LoginResponse;

/**
 * @project: backend
 * @author: Sarvar55
 */

public interface AuthService {
    LoginResponse login(LoginRequest request);

    GenericResponse logout(RefreshTokenRequest request);

    LoginResponse refresh(RefreshTokenRequest request);
}
