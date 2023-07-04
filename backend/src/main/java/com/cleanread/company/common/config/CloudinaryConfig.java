package com.cleanread.company.common.config;

import com.cloudinary.Cloudinary;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @project: backend
 */
@Configuration
public class CloudinaryConfig {

    private final String CLOUDINARY_URL = "cloudinary://346721151313273:geQgYnAQ3PlVL829o650Q7ENyns@dhshekhf56hsh91baltali";

    @Bean
    public Cloudinary cloudinary() {
        Cloudinary cloudinary = new Cloudinary(CLOUDINARY_URL);
        cloudinary.config.secure = true;
        return cloudinary;
    }

}
