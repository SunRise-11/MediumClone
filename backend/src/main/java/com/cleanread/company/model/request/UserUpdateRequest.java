package com.cleanread.company.model.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdateRequest {

    @NotNull(message = "{validation.constraints.NotNull.message}")
    @NotEmpty(message = "{validation.constraints.NotNull.message}")
    private String username;

    @Email(message = "{validation.constraints.email.message}")
    private String email;

    private String password;

    private String bio;
}
