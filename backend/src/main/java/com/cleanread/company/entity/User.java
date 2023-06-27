package com.cleanread.company.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@Entity
@Builder
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@AttributeOverride(name = "id", column = @Column(name = "user_id",
        nullable = false, columnDefinition = "BIGINT UNSIGNED"))
@EqualsAndHashCode(callSuper = false)
public class User extends BaseEntity {
    private String username;

    private String email;

    private String password;

    private String image;

    private String bio;

    private boolean isEmailVerified;

    //!! bunun bana neye magal olucagına nasıl bir etki edecegine dikkat et
    //bir user silindidiginde ona ilgili olan roller silinicek
    //ama bence cok  bir şey kayp etmem neden cunku many-to-many ilişik olduguundan
    // o userin Moderator ve ya user rolun silindiginde ona ozel rol silinir yani yine de db de
    // o role kalmıs olur
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonBackReference
    private Set<Post> posts;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonBackReference
    private Set<PostLikeUser> likeUsers = new HashSet<>();

    @OneToMany(mappedBy = "followingUser", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private Set<Follow> followings = new HashSet<>();

    @OneToMany(mappedBy = "followedUser", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private Set<Follow> followers = new HashSet<>();


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        User user = (User) o;
        return isEmailVerified == user.isEmailVerified &&
                Objects.equals(username, user.username) &&
                Objects.equals(email, user.email) &&
                Objects.equals(password, user.password) &&
                Objects.equals(image, user.image) &&
                Objects.equals(bio, user.bio) &&
                Objects.equals(roles, user.roles) &&
                Objects.equals(posts, user.posts);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), username, email, password, image, bio, isEmailVerified, roles, posts);
    }
}
