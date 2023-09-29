package ua.shtaiier.harmonynest.main.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SpotifyUser {

    @Id
    @Indexed(unique = true)
    private String id;
    private String email;
    private String product;
    private String image;
    private String displayedName;

}
