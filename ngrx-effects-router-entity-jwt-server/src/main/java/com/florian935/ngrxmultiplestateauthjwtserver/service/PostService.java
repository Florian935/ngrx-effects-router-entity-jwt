package com.florian935.ngrxmultiplestateauthjwtserver.service;

import com.florian935.ngrxmultiplestateauthjwtserver.domain.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {

    Optional<Post> findById(String id);

    List<Post> findAll();

    Post insert(Post post);

    Optional<Post> update(String id, Post post);

    void deleteById(String id);

    void delete(Post post);
}
