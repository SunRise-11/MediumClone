package com.cleanread.company.entity;

import com.cleanread.company.model.enums.ERole;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

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
}
