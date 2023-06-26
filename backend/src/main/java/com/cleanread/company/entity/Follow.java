package com.cleanread.company.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@Table(name = "follows")
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Follow extends BaseEntity {

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "following_user_id")
    @JsonBackReference
    private User followingUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "followed_user_id")
    @JsonBackReference
    private User followedUser;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Follow follow = (Follow) o;
        return Objects.equals(followingUser, follow.followingUser) && Objects.equals(followedUser, follow.followingUser);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), followingUser, followedUser);
    }
}
