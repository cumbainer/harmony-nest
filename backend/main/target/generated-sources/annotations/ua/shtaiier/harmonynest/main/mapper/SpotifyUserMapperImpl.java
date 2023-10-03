package ua.shtaiier.harmonynest.main.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ua.shtaiier.harmonynest.main.domain.SpotifyUser;
import ua.shtaiier.harmonynest.main.dto.SpotifyUserDto;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-10-03T16:31:52+0300",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 19.0.2 (Oracle Corporation)"
)
@Component
public class SpotifyUserMapperImpl implements SpotifyUserMapper {

    @Override
    public SpotifyUser toDomain(SpotifyUserDto entity) {
        if ( entity == null ) {
            return null;
        }

        SpotifyUser.SpotifyUserBuilder spotifyUser = SpotifyUser.builder();

        spotifyUser.id( entity.getId() );
        spotifyUser.email( entity.getEmail() );
        spotifyUser.product( entity.getProduct() );
        spotifyUser.image( entity.getImage() );
        spotifyUser.displayedName( entity.getDisplayedName() );
        spotifyUser.token( entity.getToken() );

        return spotifyUser.build();
    }

    @Override
    public SpotifyUserDto toDto(SpotifyUser entity) {
        if ( entity == null ) {
            return null;
        }

        SpotifyUserDto.SpotifyUserDtoBuilder spotifyUserDto = SpotifyUserDto.builder();

        spotifyUserDto.id( entity.getId() );
        spotifyUserDto.email( entity.getEmail() );
        spotifyUserDto.product( entity.getProduct() );
        spotifyUserDto.image( entity.getImage() );
        spotifyUserDto.displayedName( entity.getDisplayedName() );
        spotifyUserDto.token( entity.getToken() );

        return spotifyUserDto.build();
    }

    @Override
    public List<SpotifyUser> toDomains(List<SpotifyUserDto> entity) {
        if ( entity == null ) {
            return null;
        }

        List<SpotifyUser> list = new ArrayList<SpotifyUser>( entity.size() );
        for ( SpotifyUserDto spotifyUserDto : entity ) {
            list.add( toDomain( spotifyUserDto ) );
        }

        return list;
    }

    @Override
    public List<SpotifyUserDto> toDtos(List<SpotifyUser> entity) {
        if ( entity == null ) {
            return null;
        }

        List<SpotifyUserDto> list = new ArrayList<SpotifyUserDto>( entity.size() );
        for ( SpotifyUser spotifyUser : entity ) {
            list.add( toDto( spotifyUser ) );
        }

        return list;
    }
}
