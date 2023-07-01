package com.cleanread.company.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.Hibernate;

import java.util.*;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@Builder
@Entity
@Table(name = "posts")
@AllArgsConstructor
@NoArgsConstructor
@AttributeOverride(name = "id", column = @Column(name = "post_id",
        nullable = false, columnDefinition = "BIGINT UNSIGNED"))
public class Post extends BaseEntityAudit {
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private String image;

    private Integer readingTime;

    @Column(name = "is_pinned", columnDefinition = "tinyint(1) default 0")
    @Builder.Default
    private boolean pinned = false;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JoinColumn(name = "user_id")
    @JsonManagedReference
    private User user;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "post_tags",
            joinColumns = {@JoinColumn(name = "post_id")},
            inverseJoinColumns = {@JoinColumn(name = "tag_id")})
    @JsonBackReference
    private Set<Tag> tags = new HashSet<>();

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonBackReference
    private Set<PostLikeUser> likedUsers = new HashSet<>();


    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    @JsonBackReference
    //dataintegrationviolation hatası cozuldu commetleri postu silerken yani parant tablo childlere ne olsun demedigimi icin hata verdi
    private List<Comment> comments = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Post post = (Post) o;
        return id != null && Objects.equals(id, post.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
