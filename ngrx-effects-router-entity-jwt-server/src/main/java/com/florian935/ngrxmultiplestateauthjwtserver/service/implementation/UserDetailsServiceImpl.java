package com.florian935.ngrxmultiplestateauthjwtserver.service.implementation;

import com.florian935.ngrxmultiplestateauthjwtserver.domain.ConnectedUser;
import com.florian935.ngrxmultiplestateauthjwtserver.domain.User;
import com.florian935.ngrxmultiplestateauthjwtserver.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final Optional<User> perhapsExist = userRepository.findByUsername(username);
        perhapsExist.orElseThrow(() -> new UsernameNotFoundException("User not found."));

        return perhapsExist.map(ConnectedUser::new).get();
    }
}
