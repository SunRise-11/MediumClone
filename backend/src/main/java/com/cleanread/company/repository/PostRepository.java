package com.cleanread.company.repository;

import com.cleanread.company.entity.Post;
import com.cleanread.company.entity.Tag;
import com.cleanread.company.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
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
public interface PostRepository extends JpaRepository<Post, Long>, JpaSpecificationExecutor<Post> {
    //@Query("select p from Post p where p.tags = ?1")
    Page<Post> findAllByTags(Tag tag, Pageable pageable);

    Page<Post> findAllByUser(User user, Pageable pageable);

    Page<Post> findAllByUserIn(List<User> users, Pageable pageable);

    @Query("SELECT p FROM Post p LEFT JOIN p.likedUsers pl GROUP BY p.id ORDER BY COUNT(pl.user) DESC")
    Page<Post> findPostsOrderByLikeCount(Pageable pageable, Specification<Post> specification);

    @Query("SELECT p FROM Post p LEFT JOIN p.likedUsers pl GROUP BY p.id ORDER BY COUNT(pl.user) DESC")
    Page<Post> findPostsOrderByLikeCount(Pageable pageable);

    @Query("SELECT p FROM Post p LEFT JOIN p.likedUsers lu WITH lu.post = p JOIN p.tags t WHERE t.id = :tagId GROUP BY p ORDER BY COUNT(lu) DESC")
    Page<Post> findAllByTagIdAndOrderByLikeCount(@Param("tagId") Long tagId, Pageable pageable);


    Page<Post> findAllByUserOrderByPinnedDesc(Pageable pageable, User user);

    @Query("select p from Post p where p.title like concat('%', ?1, '%')")
    Page<Post> findByTitleContaining(String title, Pageable pageable);

    //@Query("select p from Post p order by p.createdAt DESC")
    Page<Post> findAllByOrderByCreatedAtDesc(Pageable pageable);

    Page<Post> findAllByTagsOrderByCreatedAtDesc(Tag tag, Pageable pageable);

    //@Query("select p from Post p where p.createdAt between ?1 and ?2")
    Page<Post> findByCreatedAtBetween(Date start, Date end, Pageable pageable);

    @Query("select count(l) from PostLikeUser l where l.post.id=:postId")
    Long countByPostLike(@Param("postId") Long postId);

    void deleteById(Long postId);

}
