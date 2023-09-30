package ua.shtaiier.harmonynest.main.dto;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Data
public class GuestDto {

    private String id;
    private String displayedName;
    private String image;
    private LocalDate registrationDate;

}
