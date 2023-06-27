package com.cleanread.company.service.Impl;

import com.cleanread.company.entity.Post;
import com.cleanread.company.entity.PostLikeUser;
import com.cleanread.company.entity.User;
import com.cleanread.company.exceptions.AlreadyFollowedException;
import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.repository.PostLikeRepository;
import com.cleanread.company.service.PostLikeService;
import com.cleanread.company.service.PostService;
import com.cleanread.company.service.UserService;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Caching;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * @project: backend
 */
@Service
@AllArgsConstructor
public class PostLikeServiceImpl implements PostLikeService {
    private final PostService postService;
    private final UserService userService;
    private final PostLikeRepository postLikeRepository;

    @Override
    @Caching(evict = @CacheEvict(value = {"posts", "postdto", "post"}, allEntries = true))
    public PostLikeUser createOneLike(Long userId, Long postId) {
        Post post = postService.getPostById(postId);
        User user = userService.getUserById(userId);

        if (isPostLikedByUserAndUserLikedPost(userId, postId))
            throw new AlreadyFollowedException("This post already like");

        PostLikeUser postLikeUser = new PostLikeUser();
        postLikeUser.setPost(post);
        postLikeUser.setUser(user);

        return postLikeRepository.save(postLikeUser);
    }

    @Override
    @Caching(evict = @CacheEvict(value = {"posts", "postdto", "post"}, allEntries = true))
    public void deleteOneLike(Long userId, Long postId) {
        Specification<PostLikeUser> spec = Specification.where(userHasLikedPost(userId))
                .and(postHasBeenLikedByUser(postId));

        Optional<PostLikeUser> optionalPostLikeUser = postLikeRepository.findOne(spec);
        optionalPostLikeUser.orElseThrow(() -> new ResourceNotFoundException("Post or User not found", "", ""));

        PostLikeUser postLikeUser = optionalPostLikeUser.get();
        postLikeRepository.delete(postLikeUser);
    }


    private Specification<PostLikeUser> userHasLikedPost(Long userId) {
        return (root, query, cb) -> {
            Join<PostLikeUser, User> postLikeUserUserJoin = root.join("user", JoinType.INNER);
            return cb.equal(postLikeUserUserJoin.get("id"), userId);
        };
    }

    private Specification<PostLikeUser> postHasBeenLikedByUser(Long postId) {
        return (root, query, cb) -> {
            Join<PostLikeUser, Post> postJoin = root.join("post", JoinType.INNER);
            return cb.equal(postJoin.get("id"), postId);
        };
    }

    private boolean isPostLikedByUserAndUserLikedPost(Long userId, Long postId) {
        return postLikeRepository.exists(userHasLikedPost(userId).and(postHasBeenLikedByUser(postId)));
    }
}
