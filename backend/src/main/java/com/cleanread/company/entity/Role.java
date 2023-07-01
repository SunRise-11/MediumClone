package com.cleanread.company.entity;

import com.cleanread.company.model.enums.ERole;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.Hibernate;

import java.util.Objects;
import java.util.Set;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@Entity
@Table(name = "roles")
@AttributeOverride(name = "id", column = @Column(name = "role_id",
        nullable = false, columnDefinition = "BIGINT UNSIGNED"))
public class Role extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private ERole roleName;

    @ManyToMany(mappedBy = "roles", fetch = FetchType.EAGER)
    @JsonManagedReference
    private Set<User> users;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Role role = (Role) o;
        return id != null && Objects.equals(id, role.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
