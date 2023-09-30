package ua.shtaiier.harmonynest.main.mapper;

import java.util.List;

public interface BaseMapper<Domain, Dto> {

    Domain toDomain(Dto entity);

    Dto toDto(Domain entity);

    List<Domain> toDomains(List<Dto> entity);

    List<Dto> toDtos(List<Domain> entity);

}
