package com.cleanread.company.service.Impl;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.Tag;
import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.model.request.TagRequest;
import com.cleanread.company.repository.TagRepository;
import com.cleanread.company.service.TagService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Service
@AllArgsConstructor
public class TagServiceImpl implements TagService {

    private final TagRepository tagRepository;
    private final ObjectMapper objectMapper;

    @Override
    public Tag createTag(TagRequest request) {
        Tag tag = objectMapper.mapForRequest(request, Tag.class);
        return tagRepository.save(tag);
    }

    @Override
    public Tag updateTag(TagRequest request, Long tagId) {
        Tag inDB = getTagById(tagId);
        inDB.setName(request.getName());
        return tagRepository.save(
                inDB
        );
    }

    @Override
    public void deleteTag(Long tagId) {
        tagRepository.findById(tagId)
                .ifPresentOrElse(
                        tagRepository::delete,
                        () -> {
                            throw new ResourceNotFoundException("Tag", "tagId", String.valueOf(tagId));
                        }
                );
    }

    @Override
    public List<Tag> getAll() {
        return tagRepository.findAll();
    }

    @Override
    public Tag getTagById(Long tagId) {
        Tag tag = tagRepository.findById(tagId).orElseThrow(
                () -> new ResourceNotFoundException("Tag", "tagId", String.valueOf(tagId)));
        return tag;
    }
}
