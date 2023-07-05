package com.cleanread.company.service.Impl;

import com.cleanread.company.entity.Follow;
import com.cleanread.company.entity.User;
import com.cleanread.company.exceptions.AlreadyFollowedException;
import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.exceptions.SelfFollowException;
import com.cleanread.company.repository.FollowRepository;
import com.cleanread.company.service.FollowService;
import com.cleanread.company.service.UserService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Service
@AllArgsConstructor
public class FollowServiceImpl implements FollowService {

    private final UserService userService;
    private final FollowRepository followRepository;

    @Override
    public void followUser(Long followingUserId, Long followedUserId) throws AlreadyFollowedException, SelfFollowException {
        User followingUser = userService.getUserById(followingUserId);
        User followedUser = userService.getUserById(followedUserId);

        if (followingUser.equals(followedUser)) {
            throw new SelfFollowException("Kullanıcı Kendi kendini takip edemez");
        }

        if (isAlreadyFollowed(followedUser, followingUser)) {
            throw new AlreadyFollowedException("Kullanıcı zaten takip ediliyor");
        }

        Follow follow = new Follow();
        follow.setFollowingUser(followingUser);
        follow.setFollowedUser(followedUser);

        followRepository.save(follow);
    }

    @Override
    @Transactional
    public void unfollowUser(Long followingUserId, Long followedUserId) {
        if (followingUserId.equals(followedUserId)) {
            throw new IllegalArgumentException("unFollow Error");
        }

        int deletedCount = followRepository.deleteByFollowingUser_IdAndAndFollowedUser_Id(followingUserId, followedUserId);

        if (deletedCount == 0)
            throw new ResourceNotFoundException("Follow", "followedId", String.valueOf(followedUserId));
    }

    @Override
    public List<Follow> getFollowersByUser(Long userId) {
        User user = userService.getUserById(userId);
        return followRepository.findByFollowedUser(user);
    }

    @Override
    public List<Follow> getFollowingByUser(Long userId) {
        User user = userService.getUserById(userId);
        return followRepository.findByFollowingUser(user);
    }

    @Override
    public boolean isFollowing(Long followingUserId, Long followedUserId) {
        User followingUser = userService.getUserById(followingUserId);
        User followedUser = userService.getUserById(followedUserId);
        return followRepository.existsByFollowingUserAndFollowedUser(followingUser, followedUser);
    }


    private boolean isAlreadyFollowed(User followedUser, User followingUser) {
        return followRepository.isFollowedByExists(followedUser, followingUser);
    }
}
