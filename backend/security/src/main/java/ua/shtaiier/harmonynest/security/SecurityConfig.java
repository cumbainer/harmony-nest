package ua.shtaiier.harmonynest.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Collections;

@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors(corsCustomizer -> corsCustomizer.configurationSource(request -> {
                    CorsConfiguration config = new CorsConfiguration();
                    config.setAllowedMethods(Collections.singletonList(""));
                    config.setAllowedOrigins(Collections.singletonList("localhost:4040"));
                    config.setMaxAge(4200L);
                    config.setAllowedHeaders(Collections.singletonList(""));
                    config.setAllowCredentials(true);
                    return config;
                }))
                .authorizeHttpRequests(requests -> requests
                        .anyRequest().permitAll()
                );
        return http.build();
    }



}
