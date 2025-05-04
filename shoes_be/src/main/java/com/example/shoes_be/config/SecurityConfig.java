package com.example.shoes_be.config;


import com.example.shoes_be.config.security.JwtAuthenticationFilter;
import com.example.shoes_be.service.RedisService;
import com.example.shoes_be.service.UserService;
import com.example.shoes_be.utils.JwtTokenProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;
    private final RedisService redisService;

    public SecurityConfig(JwtTokenProvider jwtTokenProvider, UserService userService, RedisService redisService) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.redisService = redisService;
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter(jwtTokenProvider, userService, redisService);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorizeRequests -> authorizeRequests
                        .requestMatchers("/api/v1/auth/**").permitAll() // Public endpoints

                        .requestMatchers("/api/v1/orders/**",
                                         "/api/v1/products/**",
                                         "/api/v1/brands/**",
                                        "/api/v1/materials/**",
                                        "/api/v1/styles/**",
                                        "/api/v1/origins/**",
                                        "/api/v1/sizes/**",
                                        "/api/v1/promotions/**",
                                        "/api/v1/vouchers/**"

                        ).hasAnyRole("ADMIN", "MEMBERSHIP")
                        .anyRequest().authenticated()
                )
                .csrf(csrf -> csrf.disable())
                .sessionManagement(sessionManagement -> sessionManagement
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

