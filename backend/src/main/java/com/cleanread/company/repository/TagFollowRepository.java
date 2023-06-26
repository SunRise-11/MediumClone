package com.cleanread.company.repository;

import com.cleanread.company.entity.Tag;
import com.cleanread.company.entity.TagFollowUser;
import com.cleanread.company.entity.User;
import com.cleanread.company.model.response.PostProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Repository
public interface TagFollowRepository extends JpaRepository<TagFollowUser, Long> {
    //@Query("select t from TagFollowUser t where t.user = ?1")
    Page<TagFollowUser> findAllByTag(Tag tag, Pageable pageable);

    @Query("select distinct t from TagFollowUser t where t.tag = ?1")
    List<PostProjection> findAllByTag(Tag tag);

    @Query("select distinct count(t.user) from TagFollowUser t where t.tag = ?1")
    int countByUser(Tag tag);

    Integer deleteByUserAndTag(User user, Tag tag);

    @Query("select (count(t)>0) from TagFollowUser t where t.user=:user and t.tag=:tag")
    Boolean isFollowedTagByExists(@Param("user") User user, @Param("tag") Tag tag);
}
