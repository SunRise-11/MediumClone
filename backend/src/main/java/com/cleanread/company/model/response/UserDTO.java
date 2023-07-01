package com.cleanread.company.model.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO implements Serializable {
    private Long userId;
    private String username;
    private String email;
    private String bio;
    private String image;
    private boolean isEmailVerified;
}
