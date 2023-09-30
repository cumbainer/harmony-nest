package ua.shtaiier.harmonynest.main.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Guest {

    @Id
    private String id;
    private String displayedName;
    private String image;
    private LocalDate registrationDate;
    //todo might be listening time
}
