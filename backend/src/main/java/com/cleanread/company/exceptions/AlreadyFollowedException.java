package com.cleanread.company.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @project: backend
 * @author: Sarvar55
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AlreadyFollowedException extends RuntimeException {
    private String message;
    public AlreadyFollowedException(String message) {
        super(message);
    }
}
