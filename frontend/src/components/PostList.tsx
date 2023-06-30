
import React from 'react'

import Post from './Post'
import PostDTO from '@/types/Post/Post'

type Props = {}

export default async function PostList() {



    const posts = await fetch("http://localhost:8080/api/v1/posts/latest",
        { cache: 'no-cache' }
    )
        .then(response => response.json())


    console.log(posts);


    return (
        <>
            {
                posts.content && posts.content.length > 0 ? posts.content.map((post: PostDTO) => (
                    <Post key={post.postId} post={post} />
                )) : undefined
            }
        </>
    )
}