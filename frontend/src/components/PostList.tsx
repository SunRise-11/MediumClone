
import React from 'react'

import PostDTO from '@/types/Post/Post'
import Post from './Post'


export default async function PostList() {
    const res = await fetch("http://192.168.43.164:8080/api/v1/posts/latest?page=0&size=1&sort=asc", {
        next: { revalidate: 60 }
    }).then(res => res.json())

    const { content } = res


    return (
        <>
            {
                content.map((post: PostDTO) => (
                    <Post key={post.postId} post={post} />
                ))
            }
        </>
    )
}