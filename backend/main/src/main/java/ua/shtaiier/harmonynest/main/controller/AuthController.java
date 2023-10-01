package ua.shtaiier.harmonynest.main.controller;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.shtaiier.harmonynest.security.SpotifyOAuth2User;

import java.io.IOException;

@RestController
@Slf4j
@RequiredArgsConstructor
public class AuthController {

//    @Autowired
//    private AccessTokenRepository accessTokenRepository;

    private String acessToken = "";
    //todo change

    @PostMapping("/spotify/login")
    public String loginViaSpotify() {

        return "redirect:/login/oauth2/code/spotify";
    }

    @GetMapping("/user")
    public String getAuthRedirectData(
            @RegisteredOAuth2AuthorizedClient("spotify") OAuth2AuthorizedClient authorizedClient,
            Authentication authentication, HttpServletRequest request, HttpServletResponse response
    ) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        response.setHeader("Token", authorizedClient.getAccessToken().getTokenValue());
        response.sendRedirect("http://localhost:5173/token");
        SpotifyOAuth2User user = (SpotifyOAuth2User) authentication.getPrincipal();
//        accessTokenRepository.save(new AccessToken(authorizedClient.getAccessToken().getTokenValue()));

        acessToken = authorizedClient.getAccessToken().getTokenValue();
        log.info(user.getUserUri());
        log.info("CODE " + authorizedClient.getAccessToken().getTokenValue());
        return "";
//        return "redirect:/";
    }

    @GetMapping("/token")
    public String getToken(
            HttpServletResponse response
//            @RegisteredOAuth2AuthorizedClient("spotify") OAuth2AuthorizedClient authorizedClient,
    ) {
//        SpotifyOAuth2User user = (SpotifyOAuth2User)context.getAuthentication().getPrincipal();
//        response.setHeader("X-Dataverse-key", authorizedClient.getAccessToken().getTokenValue());
//        return accessTokenRepository.findAll().get(0).getAccessToken();
        return acessToken;
    }
}
