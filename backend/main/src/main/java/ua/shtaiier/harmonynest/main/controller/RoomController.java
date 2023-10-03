package ua.shtaiier.harmonynest.main.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import ua.shtaiier.harmonynest.main.dto.RoomDto;
import ua.shtaiier.harmonynest.main.service.RoomService;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
@Slf4j
public class RoomController {
    private final RoomService roomService;

    @GetMapping("")
    public List<RoomDto> getAllRooms() throws InterruptedException {

        return roomService.getAll();
    }

    @PostMapping("/new")
    public String createNewRoom(@RequestParam("hostId") String hostId, @RequestBody String roomName) {

        log.info("new room");

        return "a room";
    }

}
