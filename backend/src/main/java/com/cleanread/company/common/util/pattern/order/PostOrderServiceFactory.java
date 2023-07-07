package com.cleanread.company.common.util.pattern.order;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;

/**
 * @project: backend
 */
@AllArgsConstructor
public class PostOrderServiceFactory implements OrderServiceFactory {

    private final PostService postService;
    private final Pageable pageable;
    private final ObjectMapper objectMapper;
    private final Long tagId;

    @Override
    public OrderService createOrderService(String type, Long tagId) {
        if (type.equals("like")) {
            return new PostsOrderByLike(postService, objectMapper, pageable, tagId);
        } else if (type.equals("createdAt")) {
            return new PostsOrderByCreatedAt(postService, pageable, objectMapper, tagId);
        } else
            return new PostsOrderByCreatedAt(postService, pageable, objectMapper, tagId);
    }
}
