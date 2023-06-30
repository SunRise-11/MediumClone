package com.cleanread.company.common.config;

import com.cloudinary.Cloudinary;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

/**
 * @project: backend
 */
@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        Map<String, String> config = new HashMap<>();
        config.put("cloud_name", dotenv().get("CLOUD_NAME"));
        config.put("api_key", dotenv().get("API_KEY"));
        config.put("api_secret", dotenv().get("api_secret"));
        Cloudinary cloudinary = new Cloudinary(config);
        cloudinary.config.secure = true;
        return cloudinary;
    }

    private Dotenv dotenv() {
        return Dotenv.load();
    }
}
