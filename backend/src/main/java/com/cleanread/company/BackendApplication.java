package com.cleanread.company;

import com.cleanread.company.common.config.AppEnv;
import com.cleanread.company.entity.Role;
import com.cleanread.company.model.enums.ERole;
import com.cleanread.company.repository.RoleRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;


@Slf4j
@AllArgsConstructor
@SpringBootApplication
@EnableConfigurationProperties(value = AppEnv.class)
public class BackendApplication {

    private final RoleRepository roleRepository;
    private final AppEnv appEnv;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner runner() {
        return args -> {
            createRoleIfNotExists(roleRepository, ERole.USER);
            createRoleIfNotExists(roleRepository, ERole.ADMIN);
        };
    }

    private void createRoleIfNotExists(RoleRepository roleRepository, ERole roleName) {
        if (roleRepository.existsByRoleName(roleName).isEmpty()) {
            Role role = new Role();
            role.setRoleName(roleName);
            roleRepository.save(role);
        }
    }


}
