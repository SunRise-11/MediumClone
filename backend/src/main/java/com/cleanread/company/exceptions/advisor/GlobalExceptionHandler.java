package com.cleanread.company.exceptions.advisor;

import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.exceptions.model.ApiError;
import com.cleanread.company.model.response.GenericResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.Map;

/**
 * @project: backend
 * @author: Sarvar55
 */
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ApiError> handleMethodArgsValidException(MethodArgumentNotValidException ex, WebRequest request) {
        Map<String, String> validationErrors = new HashMap<>();

        ex.getBindingResult().getAllErrors().stream().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String message = error.getDefaultMessage();
            validationErrors.put(fieldName, message);
        });

        ApiError validationResponse = new ApiError(HttpStatus.BAD_REQUEST, "Validation Error", request.getContextPath());
        validationResponse.setValidationErrors(validationErrors);

        return ResponseEntity.badRequest().body(validationResponse);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public GenericResponse handleResourceNotFoundException(ResourceNotFoundException exception) {
        return response(exception, HttpStatus.NOT_FOUND);
    }

    private GenericResponse response(RuntimeException exception, HttpStatus status) {
        GenericResponse response = new GenericResponse(status.value(), exception.getMessage());
        return response;
    }
}
