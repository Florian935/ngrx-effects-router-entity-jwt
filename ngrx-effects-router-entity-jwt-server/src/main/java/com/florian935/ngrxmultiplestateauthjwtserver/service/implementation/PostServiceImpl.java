package com.florian935.ngrxmultiplestateauthjwtserver.service.implementation;

import com.florian935.ngrxmultiplestateauthjwtserver.domain.Post;
import com.florian935.ngrxmultiplestateauthjwtserver.repository.PostRepository;
import com.florian935.ngrxmultiplestateauthjwtserver.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    @Override
    public Optional<Post> findById(String id) {
        return postRepository.findById(id);
    }

    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Post insert(Post post) {
        return postRepository.save(post);
    }

    public Optional<Post> update(String id, Post post) {
        Optional<Post> perhapsPost = findById(id);
        if (perhapsPost.isPresent()) {
            post.setId(id);
        }

        return perhapsPost.isPresent()
                ? Optional.of(insert(post))
                : Optional.empty();
    }

    @Override
    public void deleteById(String id) {
        this.postRepository.deleteById(id);
    }

    @Override
    public void delete(Post post) {

    }
}
