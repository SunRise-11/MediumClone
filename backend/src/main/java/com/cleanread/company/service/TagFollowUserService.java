package com.cleanread.company.service;

import com.cleanread.company.entity.TagFollowUser;
import com.cleanread.company.model.response.PostProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

/**
 * @project: backend
 * @author: Sarvar55
 */

public interface TagFollowUserService {
    void followTag(Long tagId, Long userId);

    void unfollowTag(Long tagId, Long userId);

    // Map<String, Integer> getUserCountByTagId(Long tagId);

    Page<TagFollowUser> getUsersFollowedTag(Long tagId, Pageable pageable);

    List<PostProjection> getUsersFollowedByTag(Long tagId);
}
