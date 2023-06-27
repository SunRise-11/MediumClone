package com.cleanread.company.model.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostDTO implements Serializable {
    private Long postId;

    private String title;

    private String content;

    private String image;

    private Integer readingTime;

    private boolean pinned;

    private Date createdAt;

    private UserDTO user;

   // @JsonInclude(JsonInclude.Include.NON_EMPTY)
    // private Set<PostLikeDTO> likes;

    //private Set<CommentDTO> comments;
    // post icinde bu kadar buyuk bir veriye gerek yok neden cunku biz bu koiitleri
    // bir sidebar gibi acicagiz yani post acilifdigi anda gelimiyecek onu da sidebar tetiklendigi zaman
    // o anki postun id si ile ceke biliriz
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private Set<TagDTO> tags = new HashSet<>();
}
