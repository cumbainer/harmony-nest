package ua.shtaiier.harmonynest.main.controller;


import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ua.shtaiier.harmonynest.main.dto.SpotifyUserDto;
import ua.shtaiier.harmonynest.main.service.SpotifyUserService;
import ua.shtaiier.harmonynest.main.util.Token;
import ua.shtaiier.harmonynest.security.SpotifyOAuth2User;

import java.io.IOException;

@RestController
@Slf4j
@RequiredArgsConstructor
public class AuthController {

    private final SpotifyUserService userService;

    @PostMapping("/spotify/login")
    public String loginViaSpotify() {

        return "redirect:/login/oauth2/code/spotify";
    }

    @GetMapping("/user")
    public String getAuthRedirectData(
            @RegisteredOAuth2AuthorizedClient("spotify") OAuth2AuthorizedClient authorizedClient,
            Authentication authentication, HttpServletResponse response
    ) throws IOException {

        String accessToken = authorizedClient.getAccessToken().getTokenValue();
        String refreshToken = authorizedClient.getRefreshToken().getTokenValue();
        SpotifyOAuth2User user = (SpotifyOAuth2User) authentication.getPrincipal();
        SpotifyUserDto createdUser = userService.create(user, accessToken, refreshToken);

        response.sendRedirect("http://localhost:5173/auth/token?id=" + createdUser.getId());
        return "";
    }

    @GetMapping("/token")
    public Token getToken(@RequestParam("hostId") String userId) {
        return userService.getTokensByUserId(userId);
    }
}
