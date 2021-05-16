package com.florian935.ngrxmultiplestateauthjwtserver.controller;

import com.florian935.ngrxmultiplestateauthjwtserver.domain.User;
import com.florian935.ngrxmultiplestateauthjwtserver.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@RestController
@RequestMapping("/api/v1.0/users")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class UserController {
    final UserService userService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody User user) {
        try {
            System.out.println(user);
            final User userSaved = userService.insert(user);
            System.out.println(userSaved);
            return ResponseEntity.status(CREATED).body(userSaved);
        } catch (Exception e) {
            final String errorMessage = "An error occurred while saving user";
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(errorMessage);
        }

    }
}
