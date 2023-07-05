package com.cleanread.company.repository;

import com.cleanread.company.entity.Follow;
import com.cleanread.company.entity.User;
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
public interface FollowRepository extends JpaRepository<Follow, Long> {
    //@Query("select f from Follow f where f.followedUser = ?1")
    List<Follow> findByFollowedUser(User user);

    Integer deleteByFollowingUser_IdAndAndFollowedUser_Id(Long followingUserId, Long followedUserId);

    //@Query("select f from Follow f where f.followingUser = ?1")
    List<Follow> findByFollowingUser(User user);

    boolean existsByFollowingUserAndFollowedUser(User followingUser, User followedUser);

    @Query("SELECT (COUNT(f) > 0) FROM Follow f WHERE f.followedUser = :followedBy AND f.followingUser = :followingUser")
    Boolean isFollowedByExists(@Param("followedBy") User followedBy, @Param("followingUser") User followingUser);
}
