"use client"
import React, { useEffect, useState } from 'react'
import { posts as storePosts } from '../store/index'
import Post from './Post'
import PostDTO from '@/types/Post/Post'

type Props = {}

export default function PostList() {
    const [posts, setPosts] = useState<PostDTO[]>([])

    const fetchAllPosts = () => {
        setPosts(storePosts);
    }

    return (
        <>
            {
                storePosts.map((post: PostDTO) => (
                    <Post key={post.postId} post={post} handleDeletePost={() => { }} />
                ))
            }
        </>
    )
}