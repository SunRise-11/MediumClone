"use client"
import Carousel from '@/components/Carousel'
import Post from '@/components/Post';
import PostDTO from '@/types/Post/Post';
import Tag from '@/types/Tag/Tag';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

type Props = {}

export default function Filter({ }: Props) {

    const currentUser = useSession()?.data?.user;
    const currentUserId = useSession()?.data?.user?.userId

    const [activeId, setActiveId] = useState<number>();
    const [tags, setTags] = useState<Array<Tag>>([]);
    const [posts, setPosts] = useState<Array<PostDTO>>([])

    const getTags = async () => {
        const tags = await fetch(`http://localhost:8080/api/v1/tags`).then(res => res.json())
        setTags(tags)
    }

    const getPostByTag = async (tagId: number | undefined) => {

        if (tagId != undefined && activeId != 15) {
            const data = await fetch(`http://localhost:8080/api/v1/tags/${tagId}/posts?&currentPage=0&currentSize=13`).then(res => res.json())
            setPosts(data?.content)
            return;
        } if (activeId == 15) {
            const data = await fetch(`http://localhost:8080/api/v1/users/${currentUserId}/posts/following?currentPage=0`).then(res => res.json());
            setPosts(data?.content)
            return;
        }
        else {
            const data = await fetch(`http://localhost:8080/api/v1/posts/latest?&currentPage=0&currentSize=13`).then(res => res.json())
            setPosts(data?.content)
        }
    }

    useEffect(() => {
        getTags()
    }, [])

    useEffect(() => {
        getPostByTag(activeId);
    }, [activeId, currentUserId])

    return (
        <div>
            <Carousel data={tags} width={800} setActive={setActiveId} />
            {
                posts.map((post: PostDTO) => (
                    <Post key={post.postId} post={post} />
                ))
            }
        </div>
    )
}