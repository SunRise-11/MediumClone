package com.cleanread.company.common.config;

import com.cloudinary.Cloudinary;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @project: backend
 */
@Configuration
public class CloudinaryConfig {

    private final String CLOUDINARY_URL = "";

    @Bean
    public Cloudinary cloudinary() {
        Cloudinary cloudinary = new Cloudinary(CLOUDINARY_URL);
        cloudinary.config.secure = true;
        return cloudinary;
    }

}
