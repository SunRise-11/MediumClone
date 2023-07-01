package com.cleanread.company.repository;

import com.cleanread.company.entity.Role;
import com.cleanread.company.entity.User;
import com.cleanread.company.model.enums.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * @project: backend
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByRoleName(ERole role);

    Optional<Boolean> existsByRoleName(ERole name);

    List<Role> findByUsers(User user);

}
