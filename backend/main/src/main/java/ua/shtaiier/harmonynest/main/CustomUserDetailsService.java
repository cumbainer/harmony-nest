//package ua.shtaiier.harmonynest.main;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Component;
//import ua.shtaiier.harmonynest.main.dto.SpotifyUserDto;
//import ua.shtaiier.harmonynest.main.service.SpotifyUserService;
//
//@Component
//@RequiredArgsConstructor
//public class CustomUserDetailsService implements UserDetailsService {
//    private final SpotifyUserService userService;
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        SpotifyUserDto spotifyUser = userService.getByUsername(username);
//        UserDetails user = User.withUsername(spotifyUser.getEmail())
//                .password(spotifyUser.get).authorities("USER").build();
//        return user;
//
//    }
//}
