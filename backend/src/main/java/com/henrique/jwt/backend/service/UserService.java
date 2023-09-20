package com.henrique.jwt.backend.service;

import com.henrique.jwt.backend.dto.CredentialsDto;
import com.henrique.jwt.backend.dto.SignUpDto;
import com.henrique.jwt.backend.dto.UserDto;
import com.henrique.jwt.backend.entities.User;
import com.henrique.jwt.backend.exception.AppException;
import com.henrique.jwt.backend.mappers.UserMapper;
import com.henrique.jwt.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserDto findByLogin(String login){
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDTO(user);
    }

    public UserDto login(CredentialsDto credentialsDto){
        User user = userRepository.findByLogin(credentialsDto.getLogin())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if(passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()), user.getPassword())){
            return userMapper.toUserDTO(user);
        }

        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(SignUpDto userDto){
        Optional<User> optionalUser = userRepository.findByLogin(userDto.getLogin());

        if(optionalUser.isPresent()){
            throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
        }

        User user = userMapper.signUpToUser(userDto);

        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.getPassword())));

        User savedUser = userRepository.save(user);

        return userMapper.toUserDTO(user);

    }
}
