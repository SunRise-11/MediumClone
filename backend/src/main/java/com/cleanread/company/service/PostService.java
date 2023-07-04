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

    Page<PostDTO> getAllPosts(Pageable pageable);

    Post updatePinOfPost(Long postId, PinRequest request);

    Page<PostDTO> getAllPostOrderByLikes(Pageable pageable);

    Page<PostDTO> getAllPostsOrderByCreatedAt(Pageable pageable);

    Page<PostDTO> getAllPostsOrderByPinned(Pageable pageable, Long userId);

    Page<PostDTO> getAllPostOfFollowing(Long userId, Pageable pageable);

    Page<PostDTO> getPostByTag(Long tagId, Pageable pageable);

    Page<PostDTO> getPostByUser(Long userId, Pageable pageable);

    Page<PostDTO> searchPosts(String title, Pageable pageable);

    Page<PostDTO> getLatestPosts(Pageable pageable, Long tagId);

    Page<PostDTO> getPostByDateBetween(Date start, Date end, Pageable pageable);
}
