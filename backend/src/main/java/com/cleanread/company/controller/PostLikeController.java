package com.cleanread.company.controller;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.PostLikeUser;
import com.cleanread.company.model.response.GenericResponse;
import com.cleanread.company.model.response.PostLikeDTO;
import com.cleanread.company.service.PostLikeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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

    @Operation(summary = "Create a like for a post")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Like created",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PostLikeDTO.class))})
    })
    @PostMapping("/users/{userId}/posts/{postId}/like")
    public ResponseEntity<PostLikeDTO> createOneLike(@Parameter(description = "ID of the user")
                                                     @PathVariable Long userId,
                                                     @Parameter(description = "ID of the post")
                                                     @PathVariable Long postId) {

        PostLikeUser oneLike = likeService.createOneLike(userId, postId);
        PostLikeDTO likeDTO = objectMapper.mapForResponse(oneLike, PostLikeDTO.class);

        return ResponseEntity.ok(likeDTO);
    }


    @Operation(summary = "Delete a like for a post")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Like deleted",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponse.class))})
    })
    @DeleteMapping("/users/{userId}/posts/{postId}/unlike")
    public ResponseEntity<?> deleteOneLike(@Parameter(description = "ID of the user")
                                           @PathVariable Long userId,
                                           @Parameter(description = "ID of the post")
                                           @PathVariable Long postId) {

        likeService.deleteOneLike(userId, postId);
        return ResponseEntity.ok(new GenericResponse(HttpStatus.OK.value(), "like deleted succesfully"));
    }
}
