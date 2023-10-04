package ua.shtaiier.harmonynest.main.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.shtaiier.harmonynest.main.domain.Room;
import ua.shtaiier.harmonynest.main.dto.RoomDto;
import ua.shtaiier.harmonynest.main.mapper.RoomMapper;
import ua.shtaiier.harmonynest.main.repository.RoomRepository;
import ua.shtaiier.harmonynest.main.util.CreateRoomRequest;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;
    private final RoomMapper roomMapper;
    private final SpotifyUserService userService;

    public List<RoomDto> getAll() {
        List<Room> rooms = roomRepository.findAll().stream()
                .sorted(Comparator.comparing(room -> !room.isCurrentlyIsPlaying()))
                .toList();
        return roomMapper.toDtos(rooms);
    }

    public RoomDto create(CreateRoomRequest request) {

        RoomDto roomDto = RoomDto.builder()
                .creationDate(LocalDate.now())
                .owner(userService.getById(request.getHostId()))
                .build();
        Room savedRoom = roomRepository.save(roomMapper.toDomain(roomDto));

        return roomMapper.toDto(savedRoom);
    }
}
