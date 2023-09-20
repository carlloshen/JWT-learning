package com.henrique.jwt.backend.mappers;

import com.henrique.jwt.backend.dto.SignUpDto;
import com.henrique.jwt.backend.dto.UserDto;
import com.henrique.jwt.backend.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDTO(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto userDto);
}

