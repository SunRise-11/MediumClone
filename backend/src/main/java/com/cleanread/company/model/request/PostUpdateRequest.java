package com.cleanread.company.model.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostUpdateRequest {
    @NotNull(message = "{validation.constraints.NotNull.message}")
    @NotEmpty(message = "{validation.constraints.NotEmpty.message}")
    private String content;

    @NotNull(message = "{validation.constraints.NotNull.message}")
    @NotEmpty(message = "{validation.constraints.NotEmpty.message}")
    private String title;

    private String image;

    private Set<Long> tagIds;

    private boolean isPinned;
}
