package com.cleanread.company.common.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @project: backend
 * @author: Sarvar55
 */

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI mediumCloneOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Medium Clone API")
                        .description("Spring medium clone sample application")
                        .version("v0.0.1")
                        .license(new License().name("Apache 2.0").url("http://springdoc.org")))
                .externalDocs(new ExternalDocumentation()
                        .description("Medium Clone Wiki Documentation")
                        .url("https://github.com/SDU-Bilgisayar-Muhendisligi/cleanreading/wiki"));
    }
}

