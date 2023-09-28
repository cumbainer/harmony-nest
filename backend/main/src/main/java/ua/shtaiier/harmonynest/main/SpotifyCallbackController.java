package ua.shtaiier.harmonynest.main;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizeRequest;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientManager;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.web.OAuth2AuthorizedClientRepository;
import org.springframework.security.oauth2.core.endpoint.OAuth2AccessTokenResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.security.Principal;

@Controller
@RequestMapping("/spotify")
@Slf4j
@RequiredArgsConstructor
public class SpotifyCallbackController {

    private final ClientRegistrationRepository clientRegistrationRepository;
    private final OAuth2AuthorizedClientService clientService;
    private final OAuth2AuthorizedClientRepository clientRepository;


    @GetMapping("/auth/redirect")
    public String getAuthRedirectData(@RequestParam("code") String code) {
        ClientRegistration registration = clientRegistrationRepository.findByRegistrationId("spotify");
        log.info("REGISTRATION DATA: " + registration.getClientName());
        log.info("AUTH CODE: " + code);

        return "";
    }

    @GetMapping("/auth/data")
    public String getSomeData(Authentication authentication) {
        OAuth2AuthorizedClient client = clientService.loadAuthorizedClient("spotify", authentication.getName());


        log.info("CLIENT ACCESS TOKEN: " + client.getAccessToken());
        log.info("CLIENT REFRESH TOKEN: " + client.getRefreshToken());

        return "";
    }

//    @GetMapping("/auth/token")
//    public String getToken() {
//        OAuth2AuthorizeRequest tokenRequest = OAuth2AuthorizeRequest
//                .withClientRegistrationId("spotify")
//                .build();
//
//        OAuth2AuthorizedClient accessTokenResponse = clientManager.authorize(tokenRequest);
//
//        log.info("CLIENT ACCESS TOKEN: " + accessTokenResponse.getAccessToken());
//        return "";
//    }
}
