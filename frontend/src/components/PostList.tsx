"use client"
import React, { useEffect, useState } from 'react'
import { posts as storePosts } from '../store/index'
import Post from './Post'
import PostDTO from '@/types/Post/Post'

type Props = {}

export default function PostList({ }: Props) {
    const [posts, setPosts] = useState<PostDTO[]>([])

    useEffect(() => {
        fetchAllPosts()
    }, [])



    const fetchAllPosts = () => {
        setPosts(storePosts);
    }

    const handleDeletePost = (e: any, postId: number) => {
        e.preventDefault();
        //ToDo: some code here
    }

    return (
        <div>
            {
                posts.map((post: PostDTO) => (
                    <Post key={post.postId} post={post} handleDeletePost={handleDeletePost} />
                ))
            }
        </div>
    )
}