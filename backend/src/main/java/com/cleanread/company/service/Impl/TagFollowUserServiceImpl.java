package com.cleanread.company.service.Impl;

import com.cleanread.company.entity.Tag;
import com.cleanread.company.entity.TagFollowUser;
import com.cleanread.company.entity.User;
import com.cleanread.company.exceptions.AlreadyFollowedException;
import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.model.response.PostProjection;
import com.cleanread.company.repository.TagFollowRepository;
import com.cleanread.company.service.TagFollowUserService;
import com.cleanread.company.service.TagService;
import com.cleanread.company.service.UserService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Service
@AllArgsConstructor
public class TagFollowUserServiceImpl implements TagFollowUserService {

    private final TagService tagService;
    private final UserService userService;
    private final TagFollowRepository tagFollowRepository;

    @Override
    public void followTag(Long tagId, Long userId) {

        User followingUser = userService.getUserById(userId);

        Tag followedTag = tagService.getTagById(tagId);

        if (tagFollowRepository.isFollowedTagByExists(followingUser, followedTag)) {
            throw new AlreadyFollowedException("Bu Tag zaten takip ediliyor");
        }

        TagFollowUser tagFollowUser = new TagFollowUser();
        tagFollowUser.setUser(followingUser);
        tagFollowUser.setTag(followedTag);
        tagFollowRepository.save(tagFollowUser);
    }

    @Override
    @Transactional
    public void unfollowTag(Long tagId, Long userId) {

        User followingUser = userService.getUserById(userId);

        Tag followedTag = tagService.getTagById(tagId);

        Integer deletedCount = tagFollowRepository.deleteByUserAndTag(followingUser, followedTag);

        if (deletedCount == 0) {
            throw new ResourceNotFoundException("Tag", "tagId or userId", "");
        }
    }

    @Override
    public Page<TagFollowUser> getUsersFollowedTag(Long tagId, Pageable pageable) {
        Tag tag = tagService.getTagById(tagId);
        return tagFollowRepository.findAllByTag(tag, pageable);
    }

    @Override
    public List<PostProjection> getUsersFollowedByTag(Long tagId) {
        Tag tag = tagService.getTagById(tagId);
        return tagFollowRepository.findAllByTag(tag);
    }

    @Override
    public boolean isFollowedUserTag(Long userId, Long tagId) {
        User user = userService.getUserById(userId);
        Tag tag = tagService.getTagById(tagId);

        return tagFollowRepository.isFollowedTagByExists(user, tag);
    }
}
