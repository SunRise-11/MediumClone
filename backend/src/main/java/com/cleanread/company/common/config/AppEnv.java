package com.cleanread.company.common.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.io.File;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@ConfigurationProperties(prefix = "app")
public class AppEnv {
    private String secretKey;
    private Long expiryDateMs;
    private Long jwtRefreshExpirationMs;
    private String jwtCookieName;
    private String uploadPath;
    private String profileImage = "profile";

    public String getProfileImagePath() {
        return uploadPath.concat(File.separator).concat(profileImage);
    }

    public String[] getPublicUrls() {
        String[] publicUrls = {
                "/tags",
                "/tags/{tagId}/posts/**",
                "/posts/search/**",
                "/users/{userId}/posts",
                "/posts/filter/**",
                "/posts/query/**",
                "/posts/latest/**",
                "/comments/{commentId}/**",
                "/posts/{postId}/comments/**",
                "/posts/{postId}/**",
                "/users/{userId}",
                "/tags/{tagId}",
                "/users",
                "/swagger-ui/**",
                "/api-docs/**"};
        return publicUrls;
    }
}
