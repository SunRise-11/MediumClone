package com.cleanread.company.service;

import com.cleanread.company.entity.Comment;
import com.cleanread.company.model.request.CommentRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @project: backend
 */
public interface CommentService {
    Comment createComment(CommentRequest request, Long postId, Long userId);

    void deleteComment(Long commentId);

    Comment updateComment(CommentRequest request, Long commentId);

    Page<Comment> getCommentsByPost(Long postId, Pageable pageable);

    Comment getCommentById(Long commentId);
}
