package com.cleanread.company.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@Entity
@Builder
@Table(name = "tag_follow_user")
@AllArgsConstructor
@NoArgsConstructor
public class TagFollowUser extends BaseEntity {
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tag_id")
    @JsonManagedReference
    private Tag tag;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    @JsonManagedReference
    private User user;
}
