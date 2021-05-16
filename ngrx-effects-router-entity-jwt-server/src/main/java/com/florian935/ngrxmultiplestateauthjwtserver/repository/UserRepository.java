package com.florian935.ngrxmultiplestateauthjwtserver.repository;

import com.florian935.ngrxmultiplestateauthjwtserver.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
}
