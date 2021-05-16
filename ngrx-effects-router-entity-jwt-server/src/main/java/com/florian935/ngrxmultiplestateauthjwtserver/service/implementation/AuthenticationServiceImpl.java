package com.florian935.ngrxmultiplestateauthjwtserver.service.implementation;

import com.florian935.ngrxmultiplestateauthjwtserver.dto.Credential;
import com.florian935.ngrxmultiplestateauthjwtserver.dto.CustomUsernamePasswordAuthenticationToken;
import com.florian935.ngrxmultiplestateauthjwtserver.repository.UserRepository;
import com.florian935.ngrxmultiplestateauthjwtserver.security.jwt.utils.JwtTokenProvider;
import com.florian935.ngrxmultiplestateauthjwtserver.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    final UserRepository userRepository;
    final AuthenticationManager authenticationManager;
    final JwtTokenProvider jwtTokenProvider;

    @Override
    public String authenticate(Credential credential) {
        final UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new CustomUsernamePasswordAuthenticationToken(credential);
        final Authentication authentication =
                authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        return jwtTokenProvider.createToken(authentication);
    }
}
