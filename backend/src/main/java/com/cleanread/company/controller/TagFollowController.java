package com.cleanread.company.controller;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.model.response.GenericResponse;
import com.cleanread.company.model.response.PostProjectionJson;
import com.cleanread.company.model.response.UserDTO;
import com.cleanread.company.service.TagFollowUserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

/**
 * @project: backend
 */
@RestController
@AllArgsConstructor
@Tag(name = "tag-follow", description = "API endpoints for following tags")
public class TagFollowController {

    private final TagFollowUserService tagFollowUserService;
    private final ObjectMapper objectMapper;


    @Operation(summary = "Follow a tag", description = "Follow a tag with the specified tag ID for the specified user ID")
    @ApiResponse(responseCode = "200", description = "Tag followed successfully",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = GenericResponse.class)))
    @ApiResponse(responseCode = "404", description = "User or tag not found",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = GenericResponse.class)))

    @PostMapping("/users/{userId}/tags/{tagId}/follow")
    public ResponseEntity<GenericResponse> userFollowTag(
            @Parameter(description = "User ID", required = true)
            @PathVariable Long userId,
            @Parameter(description = "Tag ID", required = true)
            @PathVariable Long tagId
    ) {

        tagFollowUserService.followTag(tagId, userId);

        return ResponseEntity.ok(new GenericResponse(HttpStatus.OK.value(), "Tag Followed Succesfully"));

    }

    @Operation(summary = "Unfollow a tag by user id")
    @ApiResponse(responseCode = "200", description = "Tag unfollowed successfully",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = GenericResponse.class)))
    @ApiResponse(responseCode = "404", description = "User or tag not found",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = GenericResponse.class)))

    @DeleteMapping("/users/{userId}/tags/{tagId}/unfollow")
    public ResponseEntity<GenericResponse> userUnFollowTag(
            @Parameter(description = "ID of the user who will unfollow the tag")
            @PathVariable Long userId,
            @Parameter(description = "ID of the tag to be unfollowed")
            @PathVariable Long tagId
    ) {

        tagFollowUserService.unfollowTag(tagId, userId);

        return ResponseEntity.ok(new GenericResponse(HttpStatus.OK.value(), "Tag unFollowed Succesfully"));
    }

    @Operation(summary = "Get users who follow a tag")
    @ApiResponse(responseCode = "200", description = "Found the users followed by tag ID",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(type = "object", implementation = Page.class,
                            subTypes = {UserDTO.class})))
    @ApiResponse(responseCode = "404", description = "Tag not found",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = GenericResponse.class)))

    @GetMapping("/tag/{tagId}/users")
    public ResponseEntity<Page<UserDTO>> getUsersFollowedTag(
            @Parameter(description = "ID of the tag to get the users followed") @PathVariable Long tagId,
            @PageableDefault(size = 7) Pageable pageable) {

        Page<UserDTO> userDTOS = tagFollowUserService.
                getUsersFollowedTag(tagId, pageable)
                .map(tagFollowUser -> objectMapper.mapForResponse(tagFollowUser, UserDTO.class));
        return ResponseEntity.ok(userDTOS);
    }

    @Operation(summary = "Get users following a tag by tag id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the users following the tag",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Page.class))
            ),
            @ApiResponse(responseCode = "404", description = "Tag not found",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponse.class)))})

    @GetMapping("/tags/{tagId}/users/following/posts")
    public ResponseEntity<Page<PostProjectionJson>> getTagFollowedUsers(
            @Parameter(description = "ID of the tag to get the users following") @PathVariable Long tagId,
            @PageableDefault(size = 10) Pageable pageable
    ) {
        var tagFollow = tagFollowUserService.getUsersFollowedByTag(tagId)
                .stream().map(PostProjectionJson::new).collect(Collectors.toList());

        Page<PostProjectionJson> contentPage = objectMapper.convertListToPage(tagFollow, pageable);

        return ResponseEntity.ok(contentPage);
    }

    @Operation(summary = "Check if a user has followed a tag")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User has followed the tag"),
            @ApiResponse(responseCode = "404", description = "User or Tag not found")
    })
    @GetMapping("/users/{userId}/tags/{tagId}/liked")
    public ResponseEntity<?> isFollowedUserTag(@PathVariable Long tagId, @PathVariable Long userId) {
        return ResponseEntity.ok(tagFollowUserService.isFollowedUserTag(userId, tagId));
    }
}
