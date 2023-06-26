package com.cleanread.company.model.response;

import java.util.Date;
import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */

public interface PostProjection {

    TagSummary getTag();

    UserSummary getUser();

    interface PostSummary {
        Long getId();

        String getTitle();

        String getImage();

        Integer getReadingTime();

        Boolean getPinned();

        Date getCreatedAt();

        String getContent();
    }

    interface TagSummary {
        Long getId();

        String getName();


    }

    interface UserSummary {
        Long getId();

        String getUsername();

        String getEmail();

        String getImage();

        String getBio();

        Boolean getEmailVerified();

        List<PostSummary> getPosts();
    }
}
