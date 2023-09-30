package ua.shtaiier.harmonynest.main.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ua.shtaiier.harmonynest.main.domain.Room;

public interface RoomRepository extends MongoRepository<Room, String> {

}
