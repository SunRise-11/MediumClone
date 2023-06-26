package com.cleanread.company.controller;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.Post;
import com.cleanread.company.model.request.CreatePostRequest;
import com.cleanread.company.model.request.PostUpdateRequest;
import com.cleanread.company.model.response.PostDTO;
import com.cleanread.company.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @project: backend
 * @author: Sarvar55
 */
@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class PostController {
    private final PostService postService;
   // private final PostLikeService likeService;
    private final ObjectMapper objectMapper;


    @Operation(summary = "Create a post for a user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Post created",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PostDTO.class))})
    })

    @PostMapping("/posts/users/{userId}")
    public ResponseEntity<PostDTO> createPost(@RequestBody CreatePostRequest request,
                                              @Parameter(description = "id of post to be searched")
                                              @PathVariable Long userId) {

        Post createdPost = postService.createNewPost(userId, request);
        PostDTO postDTO = objectMapper.mapForResponse(createdPost, PostDTO.class);

        return ResponseEntity.ok(postDTO);
    }

    @Operation(summary = "Update a post by its postId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Post updated",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PostDTO.class))})})

    @PutMapping("/posts/{postId}")
    public ResponseEntity<PostDTO> updatePost(@Parameter(description = "id of post to be searched") @PathVariable Long postId,
                                              @RequestBody PostUpdateRequest
            request) {
        Post updatedPost = postService.updatePost(request, postId);
        PostDTO postDTO = objectMapper.mapForResponse(updatedPost, PostDTO.class);
        return ResponseEntity.ok(postDTO);
    }
}
