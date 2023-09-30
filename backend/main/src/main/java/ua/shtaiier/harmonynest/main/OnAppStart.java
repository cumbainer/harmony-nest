package ua.shtaiier.harmonynest.main;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import ua.shtaiier.harmonynest.main.domain.Room;
import ua.shtaiier.harmonynest.main.repository.RoomRepository;

import java.time.LocalDate;
import java.util.List;

@Component
@RequiredArgsConstructor
public class OnAppStart {

    private final RoomRepository roomRepository;

    @EventListener(ApplicationReadyEvent.class)
    public void createTestRoom() {

        Room room = new Room(
                "aroom",
                "Evening chill",
                true,
                LocalDate.now(),
                "",
                null,
                10
        );
        roomRepository.save(room);
    }
}
