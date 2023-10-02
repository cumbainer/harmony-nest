package ua.shtaiier.harmonynest.main.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SpotifyUserDto {

    private String id;
    private String email;
    private String product;
    private String image;
    private String displayedName;
    private Token token;

}
