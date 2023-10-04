package ua.shtaiier.harmonynest.security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
@Slf4j
public class CustomOAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException, ServletException, IOException {

        SpotifyOAuth2User user = (SpotifyOAuth2User) authentication.getPrincipal();
        //todo handle
        if (user.getName().contains("g")) {

            List<GrantedAuthority> updatedAuthorities = new ArrayList<>(authentication.getAuthorities());
            updatedAuthorities.add(new SimpleGrantedAuthority("ADMIN"));
            Authentication updatedAuthentication = new UsernamePasswordAuthenticationToken(authentication.getPrincipal(), authentication.getCredentials(), updatedAuthorities);
            SecurityContextHolder.getContext().setAuthentication(updatedAuthentication);

        }
        String url = "http://localhost:5173/auth/token?id=" + user.getId();
        getRedirectStrategy().sendRedirect(request, response, url);
        super.onAuthenticationSuccess(request, response, authentication);
//        response.sendRedirect("/dfs");
    }
}
