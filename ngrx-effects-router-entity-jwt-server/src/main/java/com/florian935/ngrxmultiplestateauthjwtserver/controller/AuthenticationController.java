package com.florian935.ngrxmultiplestateauthjwtserver.controller;

import com.florian935.ngrxmultiplestateauthjwtserver.dto.AuthenticateResponse;
import com.florian935.ngrxmultiplestateauthjwtserver.dto.Credential;
import com.florian935.ngrxmultiplestateauthjwtserver.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@RestController
@RequestMapping("/api/v1.0/authenticate")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class AuthenticationController {
    final AuthenticationService authenticationService;

    @PostMapping
    public ResponseEntity<?> authenticate(@RequestBody Credential credentials) {
        try {
            final String token = authenticationService.authenticate(credentials);
            final AuthenticateResponse authenticateResponse = new AuthenticateResponse(token);

            return ResponseEntity.ok(authenticateResponse);
        } catch (Exception e) {
            final String errorMessage = "Wrong username or / and password provided.";
            return ResponseEntity.status(BAD_REQUEST).body(errorMessage);
        }
    }
}
