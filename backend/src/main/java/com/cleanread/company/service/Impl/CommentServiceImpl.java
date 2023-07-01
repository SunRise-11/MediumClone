package com.cleanread.company.service.Impl;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.Comment;
import com.cleanread.company.entity.Post;
import com.cleanread.company.entity.User;
import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.model.request.CommentRequest;
import com.cleanread.company.repository.CommentRepository;
import com.cleanread.company.service.CommentService;
import com.cleanread.company.service.PostService;
import com.cleanread.company.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * @project: backend
 */
@Slf4j
@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {
    private final PostService postService;
    private final UserService userService;
    private final ObjectMapper objectMapper;
    private final CommentRepository commentRepository;

    @Override
    public Comment createComment(CommentRequest request, Long postId, Long userId) {
        log.info("crateComment methodu çalişmaya başladı");
        User userDB = userService.getUserById(userId);
        Post postDB = postService.getPostById(postId);
        Comment comment = objectMapper.mapForRequest(request, Comment.class);
        comment.setUser(userDB);
        comment.setPost(postDB);
        log.info("createComment methodu başarı ile sonlandi");
        return commentRepository.save(comment);
    }

    @Override
    public void deleteComment(Long commentId) {
        commentRepository.findById(commentId)
                .ifPresentOrElse(
                        commentRepository::delete,
                        () -> {
                            throw new ResourceNotFoundException("Comment", "comentId", String.valueOf(commentId));
                        }
                );
    }

    @Override
    public Comment updateComment(CommentRequest request, Long commentId) {
        Comment commentDB = getCommentById(commentId);
        commentDB.setComment(request.getComment());

        return commentRepository.save(commentDB);
    }

    @Override
    public Page<Comment> getCommentsByPost(Long postId, Pageable pageable) {
        Post postDB = postService.getPostById(postId);
        return commentRepository.findAllByPost(postDB, pageable);
    }

    @Override
    public Comment getCommentById(Long commentId) {
        return commentRepository.findById(commentId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Comment", "commentId", String.valueOf(commentId)));
    }
}
