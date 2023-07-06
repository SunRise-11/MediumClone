
import React from 'react'

import PostDTO from '@/types/Post/Post'
import Post from './Post'

type Props = {
    url: string
}

export default async function PostList({ url }: Props) {
    const res = await fetch("http://localhost:8080/api/v1/posts/latest?page=0&size=1&sort=asc", {
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