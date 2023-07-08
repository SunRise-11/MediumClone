package com.cleanread.company.service.Impl;

import com.cleanread.company.common.util.JwtUtil;
import com.cleanread.company.entity.RefreshToken;
import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.exceptions.TokenExpiredException;
import com.cleanread.company.model.request.LoginRequest;
import com.cleanread.company.model.request.RefreshTokenRequest;
import com.cleanread.company.model.response.GenericResponse;
import com.cleanread.company.model.response.LoginResponse;
import com.cleanread.company.security.user.UserPrincipal;
import com.cleanread.company.service.AuthService;
import com.cleanread.company.service.RefreshTokenService;
import com.cleanread.company.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Slf4j
@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final RefreshTokenService refreshTokenService;

    @Override
    public LoginResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        String jwtToken = jwtUtil.generateToken(userPrincipal);

        RefreshToken refreshToken = refreshTokenService.generateRefreshToken(userPrincipal.getUser().getEmail());

        return response(userPrincipal, jwtToken, refreshToken.getRefreshToken());
    }

    @Override
    public GenericResponse logout(RefreshTokenRequest request) {
        RefreshToken refreshTokenFromRedis = refreshTokenService.getRefreshTokenByToken(request.getRefreshToken());

        if (refreshTokenFromRedis == null)
            throw new ResourceNotFoundException("Refresh Token is not found", "", "");

        refreshTokenService.deleteRefreshToken(request.getRefreshToken());
        return new GenericResponse(HttpStatus.NO_CONTENT.value(), "token deleted");
    }

    @Override
    public LoginResponse refresh(RefreshTokenRequest request) {
        RefreshToken refreshTokenFromRedis = refreshTokenService.getRefreshTokenByToken(request.getRefreshToken());

        if (refreshTokenFromRedis.getRefreshToken() != null && jwtUtil.isTokenValid(refreshTokenFromRedis.getRefreshToken())) {
            String email = jwtUtil.extractEmail(refreshTokenFromRedis.getRefreshToken());
            UserPrincipal userPrincipal = new UserPrincipal(userService.findByEmail(email));
            String accessToken = jwtUtil.generateToken(userPrincipal);
            return response(userPrincipal, accessToken, refreshTokenFromRedis.getRefreshToken());
        }
        throw new TokenExpiredException("invalid refreshToken");
    }


    private LoginResponse response(UserPrincipal userPrincipal, String accessToken, String refreshToken) {
        LoginResponse response = LoginResponse.builder()
                .accessToken(accessToken)
                .bio(userPrincipal.getUser().getBio())
                .email(userPrincipal.getUser().getEmail())
                .image(userPrincipal.getUser().getImage())
                .userId(userPrincipal.getUser().getId())
                .refreshToken(refreshToken)
                .isEmailVerified(userPrincipal.getUser().isEmailVerified())
                .username(userPrincipal.getUsername()).build();
        return response;
    }
}
