package ua.shtaiier.harmonynest.main.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ua.shtaiier.harmonynest.main.dto.RoomDto;
import ua.shtaiier.harmonynest.main.service.RoomService;
import ua.shtaiier.harmonynest.main.util.CreateRoomRequest;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
@Slf4j
public class RoomController {

    private final RoomService roomService;

    @GetMapping("")
    public List<RoomDto> getAllRooms() {
        return roomService.getAll();
    }

    @PostMapping("/new")
    public RoomDto createNewRoom(@RequestBody CreateRoomRequest request) {
        return roomService.create(request);
    }

}
