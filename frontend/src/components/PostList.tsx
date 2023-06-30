"use client"
import React, { useEffect, useState } from 'react'
import { posts as storePosts } from '../store/index'
import Post from './Post'
import PostDTO from '@/types/Post/Post'



export default async function PostList() {
    const res = await fetch("http://192.168.43.164:8080/api/v1/posts/latest?page=0&size=1&sort=asc", {
        next : { revalidate : 60 }
    }).then(res => res.json())

    const { content } = res


    return (
        <>
            {
                content.map((post: PostDTO) => (
                    <Post key={post.postId} post={post} handleDeletePost={() => { }} />
                ))
            }
        </>
    )
}