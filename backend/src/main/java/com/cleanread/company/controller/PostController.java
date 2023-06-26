package com.cleanread.company.controller;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.Post;
import com.cleanread.company.model.request.CreatePostRequest;
import com.cleanread.company.model.request.PostUpdateRequest;
import com.cleanread.company.model.response.GenericResponse;
import com.cleanread.company.model.response.PostDTO;
import com.cleanread.company.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
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

    @Operation(summary = "Get a post by its postId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the post",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = PostDTO.class))}),
            @ApiResponse(responseCode = "404", description = "Post not found",
                    content = @Content)})

    @GetMapping("/posts/{postId}")
    public ResponseEntity<PostDTO> getPostById(@Parameter(description = "postId of post to be searched")
                                               @PathVariable Long postId) {

        PostDTO postDTO = postService.getPostDTOById(postId);

        return ResponseEntity.ok(postDTO);
    }

    @Operation(summary = "Get posts by userId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found posts by userId",
                    content = {@Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = PostDTO.class)))}),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})

    @GetMapping("/users/{userId}/posts")
    public ResponseEntity<Page<PostDTO>> getPostsByUser(
            @Parameter(description = "userId of user to filter posts", example = "12345", required = true)
            @PathVariable Long userId,
            @Parameter(description = "Pageable object for pagination and sorting")
            @PageableDefault(sort = "createdAt", direction = Sort.Direction.DESC, size = 5) Pageable pageable) {

        Page<PostDTO> pageablePostDTOS = postService.getPostByUser(userId, pageable)
                .map(post -> objectMapper.mapForResponse(post, PostDTO.class));

        return ResponseEntity.ok(pageablePostDTOS);
    }

    @Operation(summary = "Delete a post by postId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Post deleted successfully",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Post not found",
                    content = @Content)})

    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<?> deletePost(@Parameter(description = "Id of post to be deleted")
                                        @PathVariable Long postId) {
        postService.deletePost(postId);
        return ResponseEntity.status(HttpStatus.OK)
                .body(new GenericResponse(HttpStatus.OK.value(), "Post başarılı bir şekilde silindi"));
    }

    @Operation(summary = "Get posts by tagId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found posts by tagId",
                    content = {@Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = PostDTO.class)))}),
            @ApiResponse(responseCode = "404", description = "Tag not found",
                    content = @Content)})

    @GetMapping("/tags/{tagId}/posts")
    public ResponseEntity<Page<PostDTO>> getPostsByTag(@Parameter(description = "tagId of tag to filter posts")
                                                       @PathVariable Long tagId,
                                                       @PageableDefault(size = 5, sort = "createdAt", direction = Sort.Direction.DESC)
                                                               Pageable pageable) {
        Page<PostDTO> pageablePostDTOS = postService.
                getPostByTag(tagId, pageable).map(post -> objectMapper.mapForResponse(post, PostDTO.class));

        return ResponseEntity.ok(pageablePostDTOS);
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved posts",
                    content = {@Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = PostDTO.class)))})})

    @GetMapping("/users/{userId}/posts/following")
    public ResponseEntity<Page<PostDTO>> getAllPostOfFollowing(
            @Parameter(description = "User ID to retrieve the posts of the users they are following")
            @PathVariable Long userId,
            @Parameter(description = "Page number and size for pagination. Default size is 1.")
            @PageableDefault(size = 3) Pageable pageable) {

        Page<PostDTO> postDTOS = postService.
                getAllPostOfFollowing(userId, pageable)
                .map(post -> objectMapper.mapForResponse(post, PostDTO.class));

        return ResponseEntity.ok(postDTOS);
    }
}
