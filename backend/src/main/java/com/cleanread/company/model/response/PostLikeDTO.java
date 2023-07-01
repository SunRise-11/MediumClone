package com.cleanread.company.model.response;

import com.cleanread.company.entity.PostLikeUser;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @project: backend
 */
@Data
@NoArgsConstructor
public class PostLikeDTO implements Serializable {

    private Long userId;
    private Long postId;

    public PostLikeDTO(PostLikeUser postLikeUser) {//burası onemli getPostById tarafında kullanılıyor
        if (postLikeUser.getUser() != null && postLikeUser.getUser().getId() != null)
            this.setUserId(postLikeUser.getUser().getId());
        if (postLikeUser.getPost() != null && postLikeUser.getPost().getId() != null)
            this.setPostId(postLikeUser.getPost().getId());
    }

}