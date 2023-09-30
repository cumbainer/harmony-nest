package ua.shtaiier.harmonynest.main.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Room {

    @Id
    private String id;
    private String title;
    private boolean isPlaying;
    private LocalDate creationDate;
    private String image;
    private List<Guest> guests;
    private int songsListened;

}
