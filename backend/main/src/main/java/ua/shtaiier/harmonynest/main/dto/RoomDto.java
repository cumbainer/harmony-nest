package ua.shtaiier.harmonynest.main.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class RoomDto {

    private String id;
    private String title;
    private boolean currentlyIsPlaying;
    private LocalDate creationDate;
    private String image;
    private List<GuestDto> guests;
    private int songsListened;
    private SpotifyUserDto owner;

}
