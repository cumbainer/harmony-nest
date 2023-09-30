package ua.shtaiier.harmonynest.main.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.shtaiier.harmonynest.main.dto.RoomDto;
import ua.shtaiier.harmonynest.main.mapper.RoomMapper;
import ua.shtaiier.harmonynest.main.repository.RoomRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;
    private final RoomMapper roomMapper;

    public List<RoomDto> getAll() {
        return roomMapper.toDtos(roomRepository.findAll());
    }
}
