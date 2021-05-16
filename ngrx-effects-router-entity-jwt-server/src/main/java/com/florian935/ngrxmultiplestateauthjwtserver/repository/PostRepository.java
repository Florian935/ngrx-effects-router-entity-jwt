package com.florian935.ngrxmultiplestateauthjwtserver.repository;

import com.florian935.ngrxmultiplestateauthjwtserver.domain.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends MongoRepository<Post, String> {
}
