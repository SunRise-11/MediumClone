package com.cleanread.company.service;

import com.cleanread.company.entity.RefreshToken;

/**
 * @project: backend
 * @author: Sarvar55
 */
public interface RefreshTokenService {
    RefreshToken getRefreshTokenByToken(String refreshToken);

    RefreshToken generateRefreshToken(String email);

    void deleteRefreshToken(String refreshToken);
}
