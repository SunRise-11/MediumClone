package com.cleanread.company.controller;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.PostLikeUser;
import com.cleanread.company.model.response.GenericResponse;
import com.cleanread.company.model.response.PostLikeDTO;
import com.cleanread.company.service.PostLikeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @project: backend
 */
@RestController
@AllArgsConstructor
public class PostLikeController {

    private final PostLikeService likeService;
    private final ObjectMapper objectMapper;

    @PostMapping("/users/{userId}/posts/{postId}/like")
    public ResponseEntity<PostLikeDTO> createOneLike(@PathVariable Long userId,
                                                     @PathVariable Long postId) {

        PostLikeUser oneLike = likeService.createOneLike(userId, postId);
        PostLikeDTO likeDTO = objectMapper.mapForResponse(oneLike, PostLikeDTO.class);

        return ResponseEntity.ok(likeDTO);
    }


    @DeleteMapping("/users/{userId}/posts/{postId}/unlike")
    public ResponseEntity<?> deleteOneLike(@PathVariable Long userId,
                                           @PathVariable Long postId) {

        likeService.deleteOneLike(userId, postId);
        return ResponseEntity.ok(new GenericResponse(HttpStatus.OK.value(), "like deleted succesfully"));
    }
}
