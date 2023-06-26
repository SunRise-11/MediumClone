package com.cleanread.company.common.config;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;
import java.util.concurrent.TimeUnit;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Slf4j
@Configuration
@AllArgsConstructor
public class WebConfig implements WebMvcConfigurer {
    private final AppEnv appEnv;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/images/**")
                .addResourceLocations("file:./" + appEnv.getUploadPath().concat(File.separator))
                .setCacheControl(CacheControl.maxAge(365, TimeUnit.DAYS));
    }

    @Bean
    public CommandLineRunner createStorages() {
        return (args) -> {
            createStorageDirectory(appEnv.getUploadPath());
            createStorageDirectory(appEnv.getProfileImagePath());
        };
    }

    private void createStorageDirectory(String path) {
        File folder = new File(path);
        log.info("profile image path" + path);
        boolean folderExists = folder.exists() && folder.isDirectory();
        if (!folderExists)
            folder.mkdir();
    }
}
