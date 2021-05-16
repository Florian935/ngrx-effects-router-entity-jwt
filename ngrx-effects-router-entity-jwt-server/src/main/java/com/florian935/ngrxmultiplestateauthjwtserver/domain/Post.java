package com.florian935.ngrxmultiplestateauthjwtserver.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "post")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Post {
    @Id private String id;
    private String title;
    private String body;
}
