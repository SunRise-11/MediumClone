package com.cleanread.company.model.response;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Data
public class PostProjectionJson implements Serializable {
    private Long tagId;
    private String tagName;
    private UserJson user;
    private List<PostJson> posts;

    public PostProjectionJson(PostProjection postProjection) {
        this.tagId = postProjection.getTag().getId();
        this.tagName = postProjection.getTag().getName();
        this.user = new UserJson(postProjection.getUser());
        this.posts = postProjection.getUser().getPosts().stream().map(PostJson::new).collect(Collectors.toList());
    }

    @Data
    class UserJson {
        private Long userId;
        private String username;
        private String email;
        private String bio;
        private Boolean isEmailVerified;

        public UserJson(PostProjection.UserSummary userSummary) {
            this.userId = userSummary.getId();
            this.username = userSummary.getUsername();
            this.bio = userSummary.getBio();
            this.email = userSummary.getEmail();
            this.isEmailVerified = userSummary.getEmailVerified();
        }

    }

    @Data
    class PostJson {
        private Long postId;
        private String title;
        private String content;
        private String image;
        private Integer readingTime;
        private Boolean pinned;
        private Date createdAt;

        public PostJson(PostProjection.PostSummary postSummary) {
            this.postId = postSummary.getId();
            this.title = postSummary.getTitle();
            this.content = postSummary.getContent();
            this.createdAt = postSummary.getCreatedAt();
            this.image = postSummary.getImage();
            this.readingTime = postSummary.getReadingTime();
            this.pinned = postSummary.getPinned();
        }
    }
}
