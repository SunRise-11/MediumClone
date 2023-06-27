package com.cleanread.company.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @project: backend
 */
@Data
@AllArgsConstructor
public class CommentDTO implements Serializable {
    private Long id;
    private String comment;
    private long createdAt;
    private UserDTO user;

    public CommentDTO(Long commentId, String comment, UserDTO user, Date createdAt) {
        this(createdAt);
        this.id = commentId;
        this.comment = comment;
        this.user = user;
    }

    public CommentDTO(Date createdAt) {
        if (createdAt != null)
            this.createdAt = createdAt.getTime();
    }

    public CommentDTO() {

    }

}
