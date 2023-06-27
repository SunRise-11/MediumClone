package com.cleanread.company.entity;

import lombok.Data;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;
import java.util.Date;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
public class RefreshToken implements Serializable {
    private String refreshToken;
    private Date createdAt;

    public RefreshToken(String refreshToken) {
        this.createdAt = new Date();
        this.refreshToken = refreshToken;
    }
}
