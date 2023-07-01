package com.cleanread.company.repository;

import com.cleanread.company.entity.Post;
import com.cleanread.company.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    int countById(Long tagId);

    Set<Tag> findByPosts(Post post);

}
