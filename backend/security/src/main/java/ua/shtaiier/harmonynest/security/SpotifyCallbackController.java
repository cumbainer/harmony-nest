package ua.shtaiier.harmonynest.security;


import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
public class SpotifyCallbackController {

    //todo change
    @GetMapping("/user")
    public String getAuthRedirectData(
            @RegisteredOAuth2AuthorizedClient("spotify") OAuth2AuthorizedClient authorizedClient,
            Authentication authentication
    ) {

        SpotifyOAuth2User user = (SpotifyOAuth2User) authentication.getPrincipal();
        log.info(user.getUserUri());
        log.info("CODE " + authorizedClient.getAccessToken().getTokenValue());
        return "success";
    }

    @GetMapping("/token")
    public void getToken(
            HttpServletResponse response,
            @RegisteredOAuth2AuthorizedClient("spotify") OAuth2AuthorizedClient authorizedClient
    ) {
        response.setHeader("X-Dataverse-key", authorizedClient.getAccessToken().getTokenValue());
    }
}
