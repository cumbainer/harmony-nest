package ua.shtaiier.harmonynest.main;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import ua.shtaiier.harmonynest.main.domain.Guest;
import ua.shtaiier.harmonynest.main.domain.Room;
import ua.shtaiier.harmonynest.main.domain.SpotifyUser;
import ua.shtaiier.harmonynest.main.util.Token;
import ua.shtaiier.harmonynest.main.repository.RoomRepository;

import java.time.LocalDate;
import java.util.List;

@Component
@RequiredArgsConstructor
public class OnAppStart {

    private final RoomRepository roomRepository;

    @EventListener(ApplicationReadyEvent.class)
    public void createTestRoom() {

        Room room1 = new Room(
                "aroom1",
                "Evening chill",
                true,
                LocalDate.now(),
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Iosif_Stalin.jpg/267px-Iosif_Stalin.jpg",
                List.of(new Guest("guest", "Popov Bogdan", null, null)),
                10,
                new SpotifyUser("spotifyuser1", null, null, "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg",
                        "Adolf Hitler", new Token())
        );
        Room room2 = new Room(
                "aroom2",
                "Winston Curchill's Great Speech",
                false,
                LocalDate.now(),
                "https://cdn.britannica.com/35/7535-004-99D14F9B/Winston-Churchill-Yousuf-Karsh-1941.jpg",
                List.of(new Guest("guest", "Popov Bogdan", null, null)),
                10,
                new SpotifyUser("spotifyuser2", null, null, "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg",
                        "Winston", new Token())
        );
        Room room3 = new Room(
                "aroom3",
                "Winston Curchill's Great Speech",
                false,
                LocalDate.now(),
                "https://cdn.britannica.com/35/7535-004-99D14F9B/Winston-Churchill-Yousuf-Karsh-1941.jpg",
                List.of(new Guest("guest", "Popov Bogdan", null, null)),
                10,
                new SpotifyUser("spotifyuser2", null, null, "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg",
                        "Winston", new Token())
        );
        Room room4 = new Room(
                "aroom4",
                "Winston Curchill's Great Speech",
                false,
                LocalDate.now(),
                "https://cdn.britannica.com/35/7535-004-99D14F9B/Winston-Churchill-Yousuf-Karsh-1941.jpg",
                List.of(new Guest("guest", "Popov Bogdan", null, null)),
                10,
                new SpotifyUser("spotifyuser2", null, null, "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg",
                        "Winston", new Token())
        );

        roomRepository.saveAll(List.of(room1, room2, room3, room4));
    }
}
