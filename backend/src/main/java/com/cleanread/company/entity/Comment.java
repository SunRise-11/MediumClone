package com.cleanread.company.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Builder
@Entity
@Table(name = "comments")
@AllArgsConstructor
@NoArgsConstructor
@AttributeOverride(name = "id", column = @Column(name = "comment_id",
        nullable = false, columnDefinition = "BIGINT UNSIGNED"))
@Data
@EqualsAndHashCode(callSuper = false)
public class Comment extends BaseEntityAudit {
    private String comment;

    @ManyToOne
    @JoinColumn(name = "post_id")
    @JsonManagedReference
    private Post post;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Comment comment1 = (Comment) o;
        return Objects.equals(comment, comment1.comment) && Objects.equals(post, comment1.post) && Objects.equals(user, comment1.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), comment, post, user);
    }

    @Override
    public String toString() {
        return "Comment{" +
                "comment='" + comment + '\'' +
                ", post=" + post +
                ", user=" + user +
                '}';
    }
}
