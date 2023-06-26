package com.cleanread.company.model.request;

import com.cleanread.company.common.annatations.UniqueEmail;
import com.cleanread.company.common.annatations.UniqueUsername;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    @NotNull(message = "{validation.constraints.NotNull.message}")
    @NotEmpty(message = "{validation.constraints.NotNull.message}")
    @UniqueUsername(message = "{validation.constraints.UniqueUsername.message}")
    private String username;

    @Email(message = "{validation.constraints.email.message}")
    @UniqueEmail(message = "{validation.constraints.UniqueUsername.message}")
    private String email;

    @Size(min = 6, max = 20)
    private String password;


}
