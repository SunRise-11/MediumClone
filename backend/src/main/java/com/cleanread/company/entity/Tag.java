package com.cleanread.company.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.*;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@Entity
@Builder
@ToString
@Table(name = "tags")
@AllArgsConstructor
@NoArgsConstructor
@AttributeOverride(name = "id", column = @Column(name = "tag_id",
        nullable = false, columnDefinition = "BIGINT UNSIGNED"))
@EqualsAndHashCode(callSuper = false)
public class Tag extends BaseEntity {
    private String name;

    //!!burası soru bir tag silindiginde onunla iligili tum postlar da silinsin mi yoksa kalsın mı?
    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE}, mappedBy = "tags")
    @JsonManagedReference
    private Set<Post> posts = new HashSet<>();

    //burası mesela o şekilde bir tag silindiginde onu takip eden tum kullanıcı ve post_id silinicek yani
    // kullanıcılar ve ya postlar sılınmıyecek
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "tag")
    @JsonBackReference
    private List<TagFollowUser> tagFollowUsers = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Tag)) return false;
        Tag tag = (Tag) o;
        return Objects.equals(getId(), tag.getId()) && Objects.equals(getName(), tag.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName());
    }
}
