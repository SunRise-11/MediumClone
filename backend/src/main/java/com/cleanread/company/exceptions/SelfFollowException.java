package com.cleanread.company.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @project: backend
 * @author: Sarvar55
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class SelfFollowException extends RuntimeException {
    private String message;

    public SelfFollowException(String message) {
        super(message);
    }
}
