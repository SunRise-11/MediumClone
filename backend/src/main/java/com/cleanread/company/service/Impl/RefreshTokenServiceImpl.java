package com.cleanread.company.service.Impl;

import com.cleanread.company.common.util.JwtUtil;
import com.cleanread.company.entity.RefreshToken;
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
        return null;
    }

    @Override
    public RefreshToken generateRefreshToken(String email) {
        return null;
    }

    @Override
    public void deleteRefreshToken(String refreshToken) {

    }
}
