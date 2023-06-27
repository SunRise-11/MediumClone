package com.cleanread.company.controller;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.entity.Tag;
import com.cleanread.company.model.request.TagRequest;
import com.cleanread.company.model.response.GenericResponse;
import com.cleanread.company.model.response.TagDTO;
import com.cleanread.company.service.TagService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @project: backend
 * @author: Sarvar55
 */
@RestController
@AllArgsConstructor
@CrossOrigin("*")
@io.swagger.v3.oas.annotations.tags.Tag(name = "Tag API", description = "annotates code related to creating new posts in an API.")
public class TagController {

    private final TagService tagService;
    private final ObjectMapper objectMapper;

    @Operation(summary = "Create a new tag")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Tag created successfully",
                    content = @Content(schema = @Schema(implementation = TagDTO.class)))})

    @PostMapping("/tags")
    //@PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<TagDTO> createTag(
            @Parameter(description = "Tag request body", required = true)
            @Valid @RequestBody TagRequest request) {

        Tag tag = tagService.createTag(request);
        TagDTO tagDTO = objectMapper.mapForResponse(tag, TagDTO.class);

        return ResponseEntity.ok(tagDTO);
    }

    @Operation(summary = "Get all tags")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Tags retrieved successfully",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = TagDTO.class))))})

    @GetMapping("/tags")

    public ResponseEntity<List<TagDTO>> findAll() {
        List<TagDTO> tagDTOS = tagService.getAll().stream()
                .map(tag -> objectMapper.mapForResponse(tag, TagDTO.class))
                .collect(Collectors.toList());

        return ResponseEntity.ok(tagDTOS);
    }

    @Operation(summary = "Delete a tag by tagId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Tag deleted successfully",
                    content = @Content(schema = @Schema(implementation = GenericResponse.class)))})

    @DeleteMapping("/tags/{tagId}")
    public ResponseEntity<GenericResponse> deleteTag(
            @Parameter(description = "Tag ID", required = true)
            @PathVariable Long tagId) {

        tagService.deleteTag(tagId);

        return ResponseEntity.ok(new GenericResponse(HttpStatus.OK.value(), "Tag successfully deleted"));
    }

    @Operation(summary = "Update a tag by tagId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Tag updated successfully",
                    content = @Content(schema = @Schema(implementation = TagDTO.class)))})

    @PutMapping("/tags/{tagId}")
    public ResponseEntity<TagDTO> updateTag(
            @Parameter(description = "Tag ID", required = true)
            @PathVariable Long tagId,
            @Parameter(description = "Tag request body", required = true)
            @RequestBody TagRequest request) {

        Tag updatedTag = tagService.updateTag(request, tagId);
        TagDTO tagDTO = objectMapper.mapForResponse(updatedTag, TagDTO.class);

        return ResponseEntity.ok(tagDTO);
    }


    @Operation(summary = "Get Tag by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Tag retrieved successfully",
                    content = @Content(schema = @Schema(implementation = TagDTO.class))),
            @ApiResponse(responseCode = "404", description = "Tag not found", content =
            @Content(schema = @Schema(implementation = GenericResponse.class))),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @GetMapping("/tags/{tagId}")
    public ResponseEntity<TagDTO> getTagById(@PathVariable Long tagId) {
        Tag tag = tagService.getTagById(tagId);
        TagDTO tagDTO = objectMapper.mapForResponse(tag, TagDTO.class);
        return ResponseEntity.ok(tagDTO);
    }
}
