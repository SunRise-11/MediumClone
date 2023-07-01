package com.cleanread.company.common.annatations;

import com.cleanread.company.repository.UserRepository;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Service
@AllArgsConstructor
public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String> {

    private final UserRepository userRepository;

    @Override
    public boolean isValid(String username, ConstraintValidatorContext constraintValidatorContext) {
        return username != null && !userRepository.existsByUsername(username);
    }
}
