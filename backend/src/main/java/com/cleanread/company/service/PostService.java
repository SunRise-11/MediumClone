package com.cleanread.company.service;

import com.cleanread.company.entity.Post;
import com.cleanread.company.model.request.CreatePostRequest;
import com.cleanread.company.model.request.PinRequest;
import com.cleanread.company.model.request.PostUpdateRequest;
import com.cleanread.company.model.response.PostDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Date;

/**
 * @project: backend
 * @author: Sarvar55
 */
public interface PostService {

    Post createNewPost(Long userId, CreatePostRequest request);

    Post updatePost(PostUpdateRequest request, Long postId);

    Post getPostById(Long postId);

    PostDTO getPostDTOById(Long postId);

    void deletePost(Long postId);

    Page<Post> getAllPosts(Pageable pageable);

    Post updatePinOfPost(Long postId, PinRequest request);

    Page<Post> getAllPostOrderByLikes(Pageable pageable);

    Page<Post> getAllPostsOrderByCreatedAt(Pageable pageable);

    Page<Post> getAllPostsOrderByPinned(Pageable pageable, Long userId);

    Page<Post> getAllPostOfFollowing(Long userId, Pageable pageable);

    Page<Post> getPostByTag(Long tagId, Pageable pageable);

    Page<Post> getPostByUser(Long userId, Pageable pageable);

    Page<Post> searchPosts(String title, Pageable pageable);

    Page<Post> getLatestPosts(Pageable pageable);

    Page<Post> getPostByDateBetween(Date start, Date end, Pageable pageable);
}
