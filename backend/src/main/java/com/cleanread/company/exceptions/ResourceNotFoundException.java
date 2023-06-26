package com.cleanread.company.exceptions;

import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    private String resourceName;
    private String filedName;
    private String fieldValue;

    public ResourceNotFoundException(String resourceName, String filedName, String fieldValue) {
        super(String.format("%s not found with %s : %s", resourceName, filedName, fieldValue));
        this.resourceName = resourceName;
        this.filedName = filedName;
        this.fieldValue = fieldValue;
    }

    public ResourceNotFoundException() {
        super("Not found");
    }

}
