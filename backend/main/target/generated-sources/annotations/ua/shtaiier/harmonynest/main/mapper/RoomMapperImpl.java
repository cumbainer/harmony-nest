package ua.shtaiier.harmonynest.main.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ua.shtaiier.harmonynest.main.domain.Guest;
import ua.shtaiier.harmonynest.main.domain.Room;
import ua.shtaiier.harmonynest.main.domain.SpotifyUser;
import ua.shtaiier.harmonynest.main.dto.GuestDto;
import ua.shtaiier.harmonynest.main.dto.RoomDto;
import ua.shtaiier.harmonynest.main.dto.SpotifyUserDto;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-10-01T19:56:16+0300",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 19.0.2 (Oracle Corporation)"
)
@Component
public class RoomMapperImpl implements RoomMapper {

    @Override
    public Room toDomain(RoomDto entity) {
        if ( entity == null ) {
            return null;
        }

        Room room = new Room();

        room.setId( entity.getId() );
        room.setTitle( entity.getTitle() );
        room.setCurrentlyIsPlaying( entity.isCurrentlyIsPlaying() );
        room.setCreationDate( entity.getCreationDate() );
        room.setImage( entity.getImage() );
        room.setGuests( guestDtoListToGuestList( entity.getGuests() ) );
        room.setSongsListened( entity.getSongsListened() );
        room.setOwner( spotifyUserDtoToSpotifyUser( entity.getOwner() ) );

        return room;
    }

    @Override
    public RoomDto toDto(Room entity) {
        if ( entity == null ) {
            return null;
        }

        RoomDto roomDto = new RoomDto();

        roomDto.setId( entity.getId() );
        roomDto.setTitle( entity.getTitle() );
        roomDto.setCurrentlyIsPlaying( entity.isCurrentlyIsPlaying() );
        roomDto.setCreationDate( entity.getCreationDate() );
        roomDto.setImage( entity.getImage() );
        roomDto.setGuests( guestListToGuestDtoList( entity.getGuests() ) );
        roomDto.setSongsListened( entity.getSongsListened() );
        roomDto.setOwner( spotifyUserToSpotifyUserDto( entity.getOwner() ) );

        return roomDto;
    }

    @Override
    public List<Room> toDomains(List<RoomDto> entity) {
        if ( entity == null ) {
            return null;
        }

        List<Room> list = new ArrayList<Room>( entity.size() );
        for ( RoomDto roomDto : entity ) {
            list.add( toDomain( roomDto ) );
        }

        return list;
    }

    @Override
    public List<RoomDto> toDtos(List<Room> entity) {
        if ( entity == null ) {
            return null;
        }

        List<RoomDto> list = new ArrayList<RoomDto>( entity.size() );
        for ( Room room : entity ) {
            list.add( toDto( room ) );
        }

        return list;
    }

    protected Guest guestDtoToGuest(GuestDto guestDto) {
        if ( guestDto == null ) {
            return null;
        }

        Guest guest = new Guest();

        guest.setId( guestDto.getId() );
        guest.setDisplayedName( guestDto.getDisplayedName() );
        guest.setImage( guestDto.getImage() );
        guest.setRegistrationDate( guestDto.getRegistrationDate() );

        return guest;
    }

    protected List<Guest> guestDtoListToGuestList(List<GuestDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Guest> list1 = new ArrayList<Guest>( list.size() );
        for ( GuestDto guestDto : list ) {
            list1.add( guestDtoToGuest( guestDto ) );
        }

        return list1;
    }

    protected SpotifyUser spotifyUserDtoToSpotifyUser(SpotifyUserDto spotifyUserDto) {
        if ( spotifyUserDto == null ) {
            return null;
        }

        SpotifyUser spotifyUser = new SpotifyUser();

        spotifyUser.setId( spotifyUserDto.getId() );
        spotifyUser.setEmail( spotifyUserDto.getEmail() );
        spotifyUser.setProduct( spotifyUserDto.getProduct() );
        spotifyUser.setImage( spotifyUserDto.getImage() );
        spotifyUser.setDisplayedName( spotifyUserDto.getDisplayedName() );

        return spotifyUser;
    }

    protected GuestDto guestToGuestDto(Guest guest) {
        if ( guest == null ) {
            return null;
        }

        GuestDto guestDto = new GuestDto();

        guestDto.setId( guest.getId() );
        guestDto.setDisplayedName( guest.getDisplayedName() );
        guestDto.setImage( guest.getImage() );
        guestDto.setRegistrationDate( guest.getRegistrationDate() );

        return guestDto;
    }

    protected List<GuestDto> guestListToGuestDtoList(List<Guest> list) {
        if ( list == null ) {
            return null;
        }

        List<GuestDto> list1 = new ArrayList<GuestDto>( list.size() );
        for ( Guest guest : list ) {
            list1.add( guestToGuestDto( guest ) );
        }

        return list1;
    }

    protected SpotifyUserDto spotifyUserToSpotifyUserDto(SpotifyUser spotifyUser) {
        if ( spotifyUser == null ) {
            return null;
        }

        SpotifyUserDto spotifyUserDto = new SpotifyUserDto();

        spotifyUserDto.setId( spotifyUser.getId() );
        spotifyUserDto.setEmail( spotifyUser.getEmail() );
        spotifyUserDto.setProduct( spotifyUser.getProduct() );
        spotifyUserDto.setImage( spotifyUser.getImage() );
        spotifyUserDto.setDisplayedName( spotifyUser.getDisplayedName() );

        return spotifyUserDto;
    }
}
