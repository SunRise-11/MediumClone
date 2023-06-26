package com.cleanread.company.service;

import com.cleanread.company.entity.Tag;
import com.cleanread.company.model.request.TagRequest;

import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */

public interface TagService {
    Tag createTag(TagRequest request);

    Tag updateTag(TagRequest request, Long tagId);

    void deleteTag(Long tagId);

    List<Tag> getAll();

    Tag getTagById(Long tagId);
}
