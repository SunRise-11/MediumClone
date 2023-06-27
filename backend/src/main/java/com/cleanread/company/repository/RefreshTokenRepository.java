package com.cleanread.company.repository;

import com.cleanread.company.entity.RefreshToken;
import lombok.AllArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Repository
@AllArgsConstructor
public class RefreshTokenRepository {
    private final RedisTemplate<String, Object> redisTemplate;
    private final String HASH_KEY = "refreshToken";

    public Optional<RefreshToken> findByRefreshToken(String refreshToken) {
        RefreshToken refreshTokenFromRedis = (RefreshToken) redisTemplate.opsForHash().get(HASH_KEY, refreshToken);
        return Optional.ofNullable(refreshTokenFromRedis);
    }

    public RefreshToken save(RefreshToken refreshToken) {
        redisTemplate.opsForHash().put(HASH_KEY, refreshToken.getRefreshToken(), refreshToken);
        return refreshToken;
    }

    public void delete(RefreshToken refreshToken) {
        redisTemplate.opsForHash().delete(HASH_KEY, refreshToken.getRefreshToken());
    }
}
