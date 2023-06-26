package com.cleanread.company.controller;

import com.cleanread.company.common.annatations.CurrentUser;
import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.User;
import com.cleanread.company.model.request.RegisterRequest;
import com.cleanread.company.model.request.UpdateProfileImageRequest;
import com.cleanread.company.model.request.UserUpdateRequest;
import com.cleanread.company.model.response.GenericResponse;
import com.cleanread.company.model.response.UserDTO;
import com.cleanread.company.security.user.UserPrincipal;
import com.cleanread.company.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @project: backend
 * @author: Sarvar55
 */

@Slf4j
@RestController
@AllArgsConstructor
public class UserController {

    private final UserService userService;
    private final ObjectMapper objectMapper;

    @Operation(summary = "Create a new user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User created successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid input"),
            @ApiResponse(responseCode = "409", description = "User already exists")})

    @PostMapping("/users")
    public ResponseEntity<UserDTO> createUser(@Valid @RequestBody @Schema(description = "User data") RegisterRequest request) {
        User user = userService.registerUser(request);
        UserDTO userDTO = objectMapper.mapForResponse(user, UserDTO.class);
        return ResponseEntity.ok(userDTO);
    }

    @Operation(summary = "Delete a user by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "User deleted successfully"),
            @ApiResponse(responseCode = "404", description = "User not found")})

    @DeleteMapping("/users/{userId}")
    public ResponseEntity<GenericResponse> deleteUser(
            @Parameter(description = "ID of user to delete") @PathVariable Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Update a user by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User updated successfully",
                    content = @Content(schema = @Schema(implementation = UserDTO.class))),
            @ApiResponse(responseCode = "404", description = "User not found")})

    @PutMapping("/users/{userId}")
    public ResponseEntity<UserDTO> updateUser(
            @Parameter(description = "ID of user to update") @PathVariable Long userId,
            @Valid @RequestBody UserUpdateRequest request) {
        User user = userService.updateUser(request, userId);
        UserDTO userDTO = objectMapper.mapForResponse(user, UserDTO.class);
        return ResponseEntity.ok(userDTO);
    }


    @Operation(summary = "Get a user by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User found",
                    content = @Content(schema = @Schema(implementation = UserDTO.class))),
            @ApiResponse(responseCode = "404", description = "User not found")})

    @GetMapping("/users/{userId}")
    public ResponseEntity<UserDTO> getUser(
            @Parameter(description = "ID of user to get")
            @PathVariable Long userId) {

        User user = userService.getUserById(userId);
        UserDTO userDTO = objectMapper.mapForResponse(user, UserDTO.class);

        return ResponseEntity.ok(userDTO);
    }

    @Operation(summary = "Get All users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Users retrieved successfully",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = UserDTO.class)))),
            @ApiResponse(responseCode = "404", description = "Users not found",
                    content = @Content(schema = @Schema(implementation = GenericResponse.class))),

    })
    @GetMapping("/users")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> usersDTOS = userService.findAll().stream().map(user -> objectMapper.mapForResponse(user, UserDTO.class))
                .collect(Collectors.toList());

        return ResponseEntity.ok(usersDTOS);
    }


    @Operation(summary = "Update user profile image")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Profile image updated",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponse.class))}),
            @ApiResponse(responseCode = "400", description = "Bad request",
                    content = @Content)})
    @PutMapping("/users/profileImage")
    public ResponseEntity<GenericResponse> updateUserProfileImage(
            @Valid @RequestBody UpdateProfileImageRequest request,
            @CurrentUser UserPrincipal userPrincipal) {
        log.info("image burayakadar geldi");
        userService.updateProfileImage(userPrincipal.getUser().getId(), request);
        return ResponseEntity.ok(new GenericResponse(HttpStatus.OK.value(), "Profile image updated"));
    }
}
