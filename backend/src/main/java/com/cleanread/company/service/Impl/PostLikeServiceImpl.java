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
    public void deleteOneLike(Long userId, Long postId) {
        Specification<PostLikeUser> spec = Specification.where(userHasLikedPost(userId))
                .and(postHasBeenLikedByUser(postId));

        Optional<PostLikeUser> optionalPostLikeUser = postLikeRepository.findOne(spec);
        if (optionalPostLikeUser.isPresent()) {
            PostLikeUser postLikeUser = optionalPostLikeUser.get();
            postLikeRepository.delete(postLikeUser);
        } else throw new ResourceNotFoundException("Post or User not found", "", "");

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

    public boolean isPostLikedByUserAndUserLikedPost(Long userId, Long postId) {
        return postLikeRepository.exists(userHasLikedPost(userId).and(postHasBeenLikedByUser(postId)));
    }
}
