package ua.shtaiier.harmonynest.main.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ua.shtaiier.harmonynest.main.domain.SpotifyUser;

public interface SpotifyUserRepository extends MongoRepository<SpotifyUser, String> {
}
