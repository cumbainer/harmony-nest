package ua.shtaiier.harmonynest.main.controller;


import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2UserAuthority;
import org.springframework.web.bind.annotation.*;
import ua.shtaiier.harmonynest.main.dto.SpotifyUserDto;
import ua.shtaiier.harmonynest.main.service.SpotifyUserService;
import ua.shtaiier.harmonynest.main.util.Token;
import ua.shtaiier.harmonynest.security.SpotifyOAuth2User;

import java.io.IOException;

@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
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

//todo ADD MULTIPLE USERS FUNCTIONALITY

    @GetMapping("/auth/check")
    public boolean checkIfUserIsAuthenticated(@RequestParam("hostId") String userId,
                                              @RequestParam(value = "refreshToken", required = false) String refreshToken) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof OAuth2AuthenticationToken) {
            OAuth2AuthenticationToken oauth2Token = (OAuth2AuthenticationToken) authentication;
            return oauth2Token.isAuthenticated();
        }
        return !userId.equals("null") && !refreshToken.equals("null");
    }

}
