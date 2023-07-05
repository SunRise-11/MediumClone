package com.cleanread.company.controller;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.Follow;
import com.cleanread.company.model.response.GenericResponse;
import com.cleanread.company.model.response.UserDTO;
import com.cleanread.company.service.FollowService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @project: backend
 * @author: Sarvar55
 */
@RestController
@AllArgsConstructor
public class FollowController {

    private final FollowService followService;
    private final ObjectMapper objectMapper;

    @Operation(summary = "Follow a user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Followed the user",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponse.class))}),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})

    @PostMapping("/users/{followingUserId}/follow/{followedUserId}")
    ResponseEntity<GenericResponse> followUser(
            @Parameter(description = "id of user who is doing the follow") @PathVariable Long followingUserId,
            @Parameter(description = "id of user who is being followed") @PathVariable Long followedUserId) {

        followService.followUser(followingUserId, followedUserId);

        return ResponseEntity.ok(new GenericResponse(HttpStatus.OK.value(), "User followed successfully"));
    }

    @Operation(summary = "Unfollow a user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Unfollowed the user",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponse.class))}),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})

    @DeleteMapping("/users/{followingUserId}/unfollow/{followedUserId}")
    ResponseEntity<GenericResponse> unFollowUser(
            @Parameter(description = "id of user who is doing the unfollow") @PathVariable Long followingUserId,
            @Parameter(description = "id of user who is being unfollowed") @PathVariable Long followedUserId) {
        followService.unfollowUser(followingUserId, followedUserId);

        return ResponseEntity.ok(new GenericResponse(HttpStatus.OK.value(), "User unfollowed successfully"));
    }

    @Operation(summary = "Get followers by user id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the followers",
                    content = {@Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = UserDTO.class)))}),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})

    @GetMapping("/followers/{userId}")
    public List<UserDTO> getFollowersByUser(
            @Parameter(description = "id of user to get the followers") @PathVariable long userId) {

        List<UserDTO> followers = followService.getFollowersByUser(userId)
                .stream().map(Follow::getFollowingUser)
                .map(user -> objectMapper.mapForResponse(user, UserDTO.class))
                .collect(Collectors.toList());

        return followers;
    }

    @Operation(summary = "Get followed users by user id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the followed users",
                    content = {@Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = UserDTO.class)))}),
            @ApiResponse(responseCode = "404", description = "User not found",
                    content = @Content)})

    @GetMapping("/following/{userId}")
    public List<UserDTO> getByFollowedUser(
            @Parameter(description = "id of user to get the followed users") @PathVariable long userId) {
        List<UserDTO> followedUsers = followService.getFollowingByUser(userId)
                .stream().map(Follow::getFollowedUser)
                .map(user -> objectMapper.mapForResponse(user, UserDTO.class))
                .collect(Collectors.toList());

        return followedUsers;
    }

    @GetMapping("/following/{followingUserId}/followed/{followedUserId}")
    public ResponseEntity<?> isFollowing(@PathVariable Long followingUserId, @PathVariable Long followedUserId) {
        return ResponseEntity.ok(followService.isFollowing(followingUserId, followedUserId));
    }

}
