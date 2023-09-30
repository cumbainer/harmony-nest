package ua.shtaiier.harmonynest.main.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.shtaiier.harmonynest.main.dto.RoomDto;
import ua.shtaiier.harmonynest.main.service.RoomService;

import java.util.List;

@RestController
@RequestMapping("/rooms")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("")
    public List<RoomDto> getAllRooms() {
        return roomService.getAll();
    }

}
