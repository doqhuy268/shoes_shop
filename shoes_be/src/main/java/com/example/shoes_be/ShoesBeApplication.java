package com.example.shoes_be;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ShoesBeApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShoesBeApplication.class, args);
    }

}
