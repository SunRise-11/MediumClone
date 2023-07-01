package com.cleanread.company.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@AllArgsConstructor
public class GenericResponse {
    private int status;
    private String message;
}
