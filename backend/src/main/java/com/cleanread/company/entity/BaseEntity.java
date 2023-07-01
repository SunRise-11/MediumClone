package com.cleanread.company.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@MappedSuperclass
public abstract class BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, columnDefinition = "BIGINT UNSIGNED")
    protected Long id;
}
