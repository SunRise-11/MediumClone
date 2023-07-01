package com.cleanread.company.exceptions.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiError {

    private HttpStatus status;

    private String message;

    private String path;

    private Map<String, String> validationErrors = new HashMap<>();

    @Builder.Default
    private long timestamp = new Date().getTime();

    public ApiError(HttpStatus status, String message, String path) {
        this.status = status;
        this.message = message;
        this.path = path;
    }
}
