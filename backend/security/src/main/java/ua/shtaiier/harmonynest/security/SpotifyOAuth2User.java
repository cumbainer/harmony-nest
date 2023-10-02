package ua.shtaiier.harmonynest.security;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.*;

@Getter
public class SpotifyOAuth2User implements OAuth2User {

    private final String oauth2ClientName;
    private final OAuth2User oauth2User;

    public SpotifyOAuth2User(OAuth2User oauth2User, String oauth2ClientName) {
        this.oauth2User = oauth2User;
        this.oauth2ClientName = oauth2ClientName;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return oauth2User.getAttributes();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return oauth2User.getAuthorities();
    }

    @Override
    public String getName() {
        return oauth2User.getAttribute("display_name");
    }

    public String getEmail() {
        return oauth2User.getAttribute("email");
    }

    public String getId() {
        return oauth2User.getAttribute("id");
    }

    public String getProduct() {
        return oauth2User.getAttribute("product");
    }

    public String getImage() {
        List<LinkedHashMap<String, String>> images = oauth2User.getAttribute("images");
        return images.get(1).get("url");
    }

    public String getUserUri() {
        return oauth2User.getAttribute("uri");
    }
}
