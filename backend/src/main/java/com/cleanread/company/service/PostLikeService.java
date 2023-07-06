package com.cleanread.company.service;

import com.cleanread.company.entity.PostLikeUser;

/**
 * @project: backend
 */
public interface PostLikeService {

    PostLikeUser createOneLike(Long userId, Long postId);

    void deleteOneLike(Long userId, Long postId);

    boolean isPostLikedByUserAndUserLikedPost(Long userId, Long postId);
}
