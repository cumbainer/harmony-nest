package ua.shtaiier.harmonynest.main.mapper;

import org.mapstruct.Mapper;
import ua.shtaiier.harmonynest.main.domain.SpotifyUser;
import ua.shtaiier.harmonynest.main.dto.SpotifyUserDto;
import ua.shtaiier.harmonynest.security.SpotifyOAuth2User;

@Mapper(componentModel = "spring")
public interface SpotifyUserMapper extends BaseMapper<SpotifyUser, SpotifyUserDto>{

    default SpotifyUser oauth2UserToDomain(SpotifyOAuth2User oAuth2User) {
        return SpotifyUser.builder()
                .id(oAuth2User.getId())
                .displayedName(oAuth2User.getName())
                .email(oAuth2User.getEmail())
                .image(oAuth2User.getImage())
                .product(oAuth2User.getProduct())
                .build();
    }
}
