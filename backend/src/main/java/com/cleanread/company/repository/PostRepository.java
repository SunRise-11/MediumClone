package com.cleanread.company.repository;

import com.cleanread.company.entity.Post;
import com.cleanread.company.entity.Tag;
import com.cleanread.company.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    //@Query("select p from Post p where p.tags = ?1")
    Page<Post> findAllByTags(Tag tag, Pageable pageable);

    Page<Post> findAllByUser(User user, Pageable pageable);

    Page<Post> findAllByUserIn(List<User> users, Pageable pageable);

    void deleteById(Long postId);
}
