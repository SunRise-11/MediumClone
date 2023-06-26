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

    Post updatePinOfPost(Long postId, PinRequest request);

    void deletePost(Long postId);

    Page<Post> getAllPosts(Pageable pageable);


    Page<Post> getAllPostOfFollowing(Long userId, Pageable pageable);

    Page<Post> getPostByTag(Long tagId, Pageable pageable);

    Page<Post> getPostByUser(Long userId, Pageable pageable);


}
