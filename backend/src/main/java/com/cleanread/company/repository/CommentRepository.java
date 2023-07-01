package com.cleanread.company.repository;

import com.cleanread.company.entity.Comment;
import com.cleanread.company.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @project: backend
 */
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    Page<Comment> findAllByPost(Post post, Pageable pageable);
}
