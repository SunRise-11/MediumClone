package com.cleanread.company.service.Impl;

import com.cleanread.company.common.util.JwtUtil;
import com.cleanread.company.entity.RefreshToken;
import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.repository.RefreshTokenRepository;
import com.cleanread.company.service.RefreshTokenService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @project: backend
 * @author: Sarvar55
 */

@Service
@AllArgsConstructor
public class RefreshTokenServiceImpl implements RefreshTokenService {

    private final JwtUtil jwtUtil;
    private final RefreshTokenRepository refreshTokenRepository;

    @Override
    public RefreshToken getRefreshTokenByToken(String refreshToken) {
        return refreshTokenRepository.findByRefreshToken(refreshToken)
                .orElseThrow(() -> new ResourceNotFoundException("Token", "refreshtoken", refreshToken));
    }

    @Override
    public RefreshToken generateRefreshToken(String email) {
        String generatedRefreshToken = jwtUtil.generateRefreshToken(email);
        RefreshToken refreshToken = new RefreshToken(generatedRefreshToken);
        refreshTokenRepository.save(refreshToken);
        return refreshToken;
    }

    @Override
    public void deleteRefreshToken(String refreshToken) {
        RefreshToken deletedToken = refreshTokenRepository.findByRefreshToken(refreshToken)
                .orElseThrow(() -> new ResourceNotFoundException("refreshToken", "token", "null"));

        refreshTokenRepository.delete(deletedToken);
    }
