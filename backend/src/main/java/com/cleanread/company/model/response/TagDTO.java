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
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TagDTO implements Serializable {
    private Long tagId;
    private String name;
}
