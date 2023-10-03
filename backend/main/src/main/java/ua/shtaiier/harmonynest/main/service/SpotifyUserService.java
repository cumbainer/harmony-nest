package ua.shtaiier.harmonynest.main.service;


import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import ua.shtaiier.harmonynest.main.domain.SpotifyUser;
import ua.shtaiier.harmonynest.main.dto.SpotifyUserDto;
import ua.shtaiier.harmonynest.main.util.Token;
import ua.shtaiier.harmonynest.main.mapper.SpotifyUserMapper;
import ua.shtaiier.harmonynest.main.repository.SpotifyUserRepository;
import ua.shtaiier.harmonynest.security.SpotifyOAuth2User;

@Service
@RequiredArgsConstructor
public class SpotifyUserService {

    private final SpotifyUserRepository spotifyUserRepository;
    private final SpotifyUserMapper spotifyUserMapper;
    private final MongoTemplate mongoTemplate;

    public SpotifyUserDto create(SpotifyOAuth2User spotifyUserDto, String accessToken, String refreshToken) {
        SpotifyUser user = spotifyUserMapper.oauth2UserToDomain(spotifyUserDto);
        user.setToken(new Token(accessToken, refreshToken));

        return spotifyUserMapper.toDto(spotifyUserRepository.save(user));
    }

    public Token getTokensByUserId(String userId) {

        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(userId));
        SpotifyUser user =mongoTemplate.find(query, SpotifyUser.class).get(0);
        return user.getToken();
    }
}
