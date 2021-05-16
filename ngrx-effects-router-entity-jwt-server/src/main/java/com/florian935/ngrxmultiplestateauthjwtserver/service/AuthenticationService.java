package com.florian935.ngrxmultiplestateauthjwtserver.service;

import com.florian935.ngrxmultiplestateauthjwtserver.dto.Credential;

public interface AuthenticationService {
    String authenticate(Credential credential);
}
