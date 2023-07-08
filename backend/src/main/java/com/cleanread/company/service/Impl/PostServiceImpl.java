package com.cleanread.company.service.Impl;

import com.cleanread.company.common.mapper.ObjectMapper;
import com.cleanread.company.common.util.MarkdownUtil;
import com.cleanread.company.entity.Follow;
import com.cleanread.company.entity.Post;
import com.cleanread.company.entity.Tag;
import com.cleanread.company.entity.User;
import com.cleanread.company.exceptions.ResourceNotFoundException;
import com.cleanread.company.model.request.CreatePostRequest;
import com.cleanread.company.model.request.PinRequest;
import com.cleanread.company.model.request.PostUpdateRequest;
import com.cleanread.company.model.response.PostDTO;
import com.cleanread.company.model.response.PostLikeDTO;
import com.cleanread.company.model.response.TagDTO;
import com.cleanread.company.repository.PostLikeRepository;
import com.cleanread.company.repository.PostRepository;
import com.cleanread.company.repository.TagRepository;
import com.cleanread.company.service.FollowService;
import com.cleanread.company.service.PostService;
import com.cleanread.company.service.TagService;
import com.cleanread.company.service.UserService;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Slf4j
@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final TagRepository tagRepository;
    private final TagService tagService;
    private final ObjectMapper objectMapper;
    private final UserService userService;
    private final MarkdownUtil markdownUtil;
    private final PostLikeRepository likeRepository;
    private final FollowService followService;


    @Override
    public Post createNewPost(Long userId, CreatePostRequest request) {
        User user = userService.getUserById(userId);
        Set<Tag> tags = setTagsToPost(request.getTagIds());

        Post createdPost = objectMapper.mapForRequest(request, Post.class);
        createdPost.setUser(user);
        createdPost.setTags(tags);

        int readingTime = markdownUtil.calculateReadingTime(createdPost.getContent());
        createdPost.setReadingTime(readingTime);

        return postRepository.save(createdPost);
    }

    @Override
    public Post updatePost(PostUpdateRequest request, Long postId) {
        Post post = getPostById(postId);
        Set<Tag> tags = setTagsToPost(request.getTagIds());

        post.setTags(tags);
        post.setTitle(request.getTitle());
        post.setImage(request.getImage());
        post.setPinned(request.isPinned());

        //null kontrolü yapmaya gerek yok çunkü gelirken validasyona tabi tutuluyor eger null ise exception firlatıyor
        post.setContent(request.getContent());
        int readingTime = markdownUtil.calculateReadingTime(post.getContent());
        post.setReadingTime(readingTime);


        return postRepository.save(post);
    }

    @Override
    public Post getPostById(Long postId) {
        Post inDB = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "postId", String.valueOf(postId)));
        return inDB;
    }

    @Override
    public PostDTO getPostDTOById(Long postId) {
        Post postDB = getPostById(postId);
        PostDTO postDTO = objectMapper.mapForResponse(postDB, PostDTO.class);

        Set<Tag> tags = tagRepository.findByPosts(postDB);

        Set<PostLikeDTO> likesList = likeRepository.findAllByPost(postDB).stream().map(PostLikeDTO::new)
                .collect(Collectors.toSet());

        postDTO.setTags(tags.stream()
                .map(tag -> objectMapper
                        .mapForResponse(tag, TagDTO.class)).collect(Collectors.toSet()));

        postDTO.setLikes(likesList);
        return postDTO;
    }

    @Override
    @Transactional
    public void deletePost(Long postId) {
        Post post = getPostById(postId);
        postRepository.delete(post);
    }

    @Override
    public Page<PostDTO> getAllPosts(Pageable pageable) {
        return mapPostToPostDTO(postRepository.findAll(pageable), pageable);
    }

    public Post updatePinOfPost(Long postId, PinRequest request) {
        Post postDB = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "postId", String.valueOf(postId)));
        postDB.setPinned(!request.getPinned());
        return postRepository.save(postDB);
    }

    @Override
    public Page<PostDTO> getAllPostOrderByLikes(Pageable pageable, Long tagId) {
        return mapPostToPostDTO(postRepository.findAllByTagIdAndOrderByLikeCount(tagId, pageable), pageable);
    }

    @Override
    public Page<PostDTO> getAllPostsByTagOrderByCreatedAt(Pageable pageable, Long tagId) {
        Tag tag = tagService.getTagById(tagId);
        return mapPostToPostDTO(postRepository.findAllByTagsOrderByCreatedAtDesc(tag, pageable), pageable);
    }

    @Override
    public Page<PostDTO> getAllPostsOrderByPinned(Pageable pageable, Long userId) {
        User user = userService.getUserById(userId);
        return mapPostToPostDTO(postRepository.findAllByUserOrderByPinnedDesc(pageable, user), pageable);
    }

    @Override
    public Page<PostDTO> getAllPostOfFollowing(Long userId, Pageable pageable) {
        List<User> users = followService.getFollowingByUser(userId)
                .stream().map(Follow::getFollowedUser).collect(Collectors.toList());

        return mapPostToPostDTO(postRepository.findAllByUserIn(users, pageable), pageable);
    }

    @Override
    public Page<PostDTO> getPostByTag(Long tagId, Pageable pageable) {
        Tag tag = tagService.getTagById(tagId);
        return mapPostToPostDTO(postRepository.findAllByTags(tag, pageable), pageable);
    }

    @Override
    public Page<PostDTO> getPostByUser(Long userId, Pageable pageable) {
        User user = userService.getUserById(userId);
        return mapPostToPostDTO(postRepository.findAllByUser(user, pageable), pageable);
    }

    @Override
    public Page<PostDTO> searchPosts(String title, Pageable pageable) {
        return mapPostToPostDTO(postRepository.findByTitleContaining(title, pageable), pageable);
    }


    @Override
    public Page<PostDTO> getLatestPosts(Pageable pageable) {
        return mapPostToPostDTO(postRepository.findAllByOrderByCreatedAtDesc(pageable), pageable);
    }

    @Override
    public Page<PostDTO> getPostByDateBetween(Date start, Date end, Pageable pageable) {
        if (start == null || end == null)
            return getAllPosts(pageable);
        return mapPostToPostDTO(postRepository.findByCreatedAtBetween(start, end, pageable), pageable);
    }

    private Set<Tag> setTagsToPost(Set<Long> tagIds) {
        Set<Tag> tags = new HashSet<>();
        if (tagIds != null && tagIds.size() > 0) {
            tagIds.forEach(tagId -> {
                Tag tag = tagService.getTagById(tagId);
                tags.add(tag);
            });
        }
        return tags;
    }

    private Page<PostDTO> mapPostToPostDTO(Page<Post> posts, Pageable pageable) {
        List<PostDTO> postDTOs = posts.stream()
                .map(post -> {
                    Set<Tag> tags = tagRepository.findByPosts(post);
                    PostDTO postDTO = objectMapper.mapForResponse(post, PostDTO.class);
                    postDTO.setTags(tags.stream()
                            .map(tag -> objectMapper.mapForResponse(tag, TagDTO.class))
                            .collect(Collectors.toSet()));
                    return postDTO;
                }).collect(Collectors.toList());

        return objectMapper.convertListToPage(postDTOs, pageable);
    }

    private Specification<Post> hasTag(Long tagId) {
        return (root, query, builder) -> {
            Join<Tag, Post> join = root.join("posts", JoinType.INNER);
            return builder.equal(join.get("id"), tagId);
        };
    }


}
