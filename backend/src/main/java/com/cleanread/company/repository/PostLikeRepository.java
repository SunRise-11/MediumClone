package com.cleanread.company.repository;

import com.cleanread.company.entity.Post;
import com.cleanread.company.entity.PostLikeUser;
import com.cleanread.company.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @project: backend
 */
@Repository
public interface PostLikeRepository extends JpaRepository<PostLikeUser, Long>, JpaSpecificationExecutor<PostLikeUser> {

    PostLikeUser findByUserAndAndPost(User user, Post post);

    //@Query("select p from PostLikeUser p where p.post = ?1")
    List<PostLikeUser> findAllByPost(Post post);
}
