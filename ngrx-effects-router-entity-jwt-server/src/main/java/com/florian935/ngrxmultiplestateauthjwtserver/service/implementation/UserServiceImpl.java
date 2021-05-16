package com.florian935.ngrxmultiplestateauthjwtserver.service.implementation;

import com.florian935.ngrxmultiplestateauthjwtserver.domain.User;
import com.florian935.ngrxmultiplestateauthjwtserver.repository.UserRepository;
import com.florian935.ngrxmultiplestateauthjwtserver.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    final UserRepository userRepository;
    final PasswordEncoder passwordEncoder;

    @Override
    public User insert(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
}
