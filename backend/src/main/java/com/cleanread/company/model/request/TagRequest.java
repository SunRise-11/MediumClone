package com.cleanread.company.model.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @project: backend
 * @author: Sarvar55
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class TagRequest {
    @NotNull(message = "{validation.constraints.NotNull.message}")
    @NotEmpty(message = "{validation.constraints.NotEmpty.message}")
    private String name;
}
