package com.cleanread.company.service;

import com.cleanread.company.entity.Follow;
import com.cleanread.company.exceptions.AlreadyFollowedException;
import com.cleanread.company.exceptions.SelfFollowException;

import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */
public interface FollowService {
    void followUser(Long followingUserId, Long followedUserId) throws AlreadyFollowedException, SelfFollowException;

    void unfollowUser(Long followingUserId, Long followedUserId);

    List<Follow> getFollowersByUser(Long userId);

    List<Follow> getFollowingByUser(Long userId);
}
