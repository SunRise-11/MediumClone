package com.cleanread.company.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @project: backend
 * @author: Sarvar55
 */
@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class TokenExpiredException extends RuntimeException {
    private String message;

    public TokenExpiredException(String message) {
        super(message);
    }
}
