package ua.shtaiier.harmonynest.main.mapper;

import org.mapstruct.Mapper;
import ua.shtaiier.harmonynest.main.domain.Room;
import ua.shtaiier.harmonynest.main.dto.RoomDto;

@Mapper(componentModel = "spring")
public interface RoomMapper extends BaseMapper<Room, RoomDto>{

}
