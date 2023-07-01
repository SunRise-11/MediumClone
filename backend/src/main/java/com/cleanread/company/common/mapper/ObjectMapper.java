package com.cleanread.company.common.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Component
public class ObjectMapper {
    @Autowired
    private ConverterManager mapperManager;

    public <D, T> D mapForRequest(final T entity, Class<D> outClass) {
        return mapperManager.forRequest().map(entity, outClass);
    }

    public <D, T> D mapForResponse(final T entity, Class<D> outClass) {
        return mapperManager.forResponse().map(entity, outClass);
    }

    public <D> Page<D> convertListToPage(List<D> list, Pageable pageable) {
        int pageNumber = pageable.getPageNumber();
        int pageSize = pageable.getPageSize();
        PageRequest pageRequest = PageRequest.of(pageNumber, pageSize);

        int startIndex = (int) pageable.getOffset();
        int endIndex = Math.min((startIndex + pageSize), list.size());
        List<D> pageContents = list.subList(startIndex, endIndex);

        Page<D> page = new PageImpl<>(pageContents, pageRequest, list.size());
        return page;
    }
}
