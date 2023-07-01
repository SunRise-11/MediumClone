package com.cleanread.company.controller;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.Comment;
import com.cleanread.company.model.request.CommentRequest;
import com.cleanread.company.model.response.CommentDTO;
import com.cleanread.company.model.response.GenericResponse;
import com.cleanread.company.service.CommentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @project: backend
 */
@Slf4j
@Tag(name = "Comment API", description = "annotates code related to creating comments in an API.")
@RestController
@AllArgsConstructor
public class CommentController {
    private final CommentService commentService;
    private final ObjectMapper objectMapper;

    @Operation(summary = "Create a comment for a post by userId and postId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Comment created successfully",
                    content = @Content(schema = @Schema(implementation = CommentDTO.class)))})

    @PostMapping("/users/{userId}/posts/{postId}/comments")
    public ResponseEntity<CommentDTO> createComment(
            @Parameter(description = "User ID", required = true)
            @PathVariable Long userId,
            @Parameter(description = "Post ID", required = true)
            @PathVariable Long postId,
            @Parameter(description = "Comment request body", required = true)
            @Valid @RequestBody CommentRequest request) {

        Comment createdComment = commentService.createComment(request, postId, userId);
        CommentDTO commentDTO = objectMapper.mapForResponse(createdComment, CommentDTO.class);

        commentDTO.setCreatedAt(commentDTO.getCreatedAt());

        return ResponseEntity.ok(commentDTO);
    }

    @Operation(summary = "Update a comment by commentId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Comment updated successfully",
                    content = @Content(schema = @Schema(implementation = CommentDTO.class)))})

    @PutMapping("/comments/{commentId}")
    public ResponseEntity<CommentDTO> updateComment(
            @Parameter(description = "Comment ID", required = true)
            @PathVariable Long commentId,
            @Parameter(description = "Comment request body", required = true)
            @Valid @RequestBody CommentRequest request) {

        Comment updatedComment = commentService.updateComment(request, commentId);
        CommentDTO commentDTO = objectMapper.mapForResponse(updatedComment, CommentDTO.class);

        return ResponseEntity.ok(commentDTO);
    }

    @Operation(summary = "Get a comment by commentId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Comment retrieved successfully",
                    content = @Content(schema = @Schema(implementation = CommentDTO.class)))})

    @GetMapping("/comments/{commentId}")
    public ResponseEntity<CommentDTO> getCommentById(
            @Parameter(description = "Comment ID", required = true)
            @PathVariable Long commentId) {

        Comment commentDB = commentService.getCommentById(commentId);
        CommentDTO commentDTO = objectMapper.mapForResponse(commentDB, CommentDTO.class);

        return ResponseEntity.ok(commentDTO);
    }

    @Operation(summary = "Get comments by postId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Comments retrieved successfully",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = CommentDTO.class))))})

    @GetMapping("/posts/{postId}/comments")
    public ResponseEntity<Page<CommentDTO>> getCommentsByPost(
            @Parameter(description = "Post ID", required = true)
            @PathVariable Long postId, Pageable pageable) {

        Page<CommentDTO> commentDTOS = commentService.getCommentsByPost(postId, pageable)
                .map(comment -> objectMapper.mapForResponse(comment, CommentDTO.class));

        return ResponseEntity.ok(commentDTOS);
    }

    @Operation(summary = "Delete a comment by commentId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Comment deleted successfully",
                    content = @Content(schema = @Schema(implementation = GenericResponse.class)))})

    @DeleteMapping("/comments/{commentId}")
    public ResponseEntity<GenericResponse> deleteComment(@PathVariable Long commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.ok(new GenericResponse(HttpStatus.OK.value(), "Yorum Başarılı bir şekilde silindi"));
    }
}
