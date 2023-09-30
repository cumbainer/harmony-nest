package ua.shtaiier.harmonynest.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientManager;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientProvider;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientProviderBuilder;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.oauth2.client.web.DefaultOAuth2AuthorizedClientManager;
import org.springframework.security.oauth2.client.web.OAuth2AuthorizedClientRepository;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Collections;

@Configuration
@EnableWebSecurity
@Slf4j
@RequiredArgsConstructor
public class SecurityConfig {

    private final CustomOAuth2Service customOAuth2Service;
    private final CustomOAuth2LoginSuccessHandler customOAuth2LoginSuccessHandler;

    @Value("${spotify.client-id}")
    private String spotifyClientId;

    @Value("${spotify.client-secret}")
    private String spotifyClientSecret;

    //todo on some admin endpoint user needs on top of spotify auth my custom form auth, so eventually it will be 2 roles, ADMIN and OAUTH2_USER
    //todo customize session properties (15 min default duration)

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors(corsCustomizer -> corsCustomizer.configurationSource(request -> {
            CorsConfiguration config = new CorsConfiguration();
            config.setAllowedMethods(Collections.singletonList(""));
            config.setAllowedOrigins(Collections.singletonList("localhost:4040"));
            config.setMaxAge(4200L);
            config.setAllowedHeaders(Collections.singletonList(""));
            config.setAllowCredentials(true);
            return config;
        }));
        http.formLogin(login -> login
                .loginPage("http://localhost:5173/login")
                .defaultSuccessUrl("/test", true)
                .permitAll()
        );
        http.authorizeHttpRequests(request -> request
                .requestMatchers("/test")
                .hasAnyAuthority("OAUTH2_USER")
                .anyRequest().authenticated()
        );
        http.oauth2Login(login -> login
                        .defaultSuccessUrl("/user", true)
//                .successHandler(customOAuth2LoginSuccessHandler)
                        .userInfoEndpoint(endpoint -> endpoint
                                .userService(customOAuth2Service))
        );

        return http.build();
    }

    @Bean
    public ClientRegistrationRepository clientRepository() {
        return new InMemoryClientRegistrationRepository(spotifyClientRegistration());
    }

    private ClientRegistration spotifyClientRegistration() {
        String[] scopes = {
                "user-read-playback-state",
                "user-modify-playback-state",
                "user-read-currently-playing",
                "app-remote-control",
                "streaming",
                "playlist-read-private",
                "playlist-read-collaborative",
                "playlist-modify-private",
                "playlist-modify-public",
                "user-follow-modify",
                "user-follow-read",
                "user-read-playback-position",
                "user-top-read",
                "user-read-recently-played",
                "user-library-modify",
                "user-library-read",
                "user-read-email",
                "user-read-private"
        };
        return ClientRegistration.withRegistrationId("spotify")
                .clientId(spotifyClientId)
                .clientSecret(spotifyClientSecret)
                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .userInfoUri("https://api.spotify.com/v1/me")
                .redirectUri("{baseUrl}/login/oauth2/code/{registrationId}")
                .scope(scopes)
                .authorizationUri("https://accounts.spotify.com/authorize")
                .tokenUri("https://accounts.spotify.com/api/token")
                .clientName("Spotify")
                .userNameAttributeName("id")
                .build();
    }

    @Bean
    public OAuth2AuthorizedClientManager authorizedClientManager(
            ClientRegistrationRepository clientRegistrationRepository,
            OAuth2AuthorizedClientRepository authorizedClientRepository) {

        OAuth2AuthorizedClientProvider authorizedClientProvider =
                OAuth2AuthorizedClientProviderBuilder.builder()
                        .authorizationCode()
                        .refreshToken()
                        .clientCredentials()
                        .build();

        DefaultOAuth2AuthorizedClientManager authorizedClientManager =
                new DefaultOAuth2AuthorizedClientManager(
                        clientRegistrationRepository, authorizedClientRepository);
        authorizedClientManager.setAuthorizedClientProvider(authorizedClientProvider);

        return authorizedClientManager;
    }

    //todo may be needed implementation of refresh token

//    @Bean
//    public ApplicationListener<AuthenticationSuccessEvent> doSomething() {
//        return new ApplicationListener<AuthenticationSuccessEvent>() {
//            @Override
//            public void onApplicationEvent(AuthenticationSuccessEvent event) {
//                Authentication authentication = event.getAuthentication();
//                //add if statement whether user is loggined via spotify or custom form
//                SpotifyOAuth2User user = (SpotifyOAuth2User) authentication.getPrincipal();
//                authentication.setAuthenticated(false);
//                //todo perform db saving
//                log.info("AUTH SUCCESS " + user.getEmail());
//
//                // get required details from OAuth2Authentication instance and proceed further
//            }
//        };
//    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public InMemoryUserDetailsManager userDetailsManager() {
        //Create single main admin
        UserDetails mainAdmin = User.withUsername("admin")
                //todo make to good impl
                .password(passwordEncoder().encode("admin"))
                .authorities(new SimpleGrantedAuthority("ADMIN"))
                .build();

        return new InMemoryUserDetailsManager(mainAdmin);
    }

}
