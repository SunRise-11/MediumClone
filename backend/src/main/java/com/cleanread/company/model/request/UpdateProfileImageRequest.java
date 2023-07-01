package com.cleanread.company.model.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateProfileImageRequest {
    // @ValidFile(types = {"jpeg", "png"})
    private String image;
}
