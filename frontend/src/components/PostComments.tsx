import { CommentDTO } from '@/types/commentDto/CommentDto';
import React, { useEffect, useState } from 'react'
import CommentBox from './CommentBox';

type Props = {
    postId: number,
    deleteComment: (commentId: number) => void
}

export default function PostComments({ postId, deleteComment }: Props) {

    const [comments, setComments] = useState<CommentDTO[]>()

    async function getPostsComments(postId: number) {
        const response = await fetch(`http://localhost:8080/api/v1/posts/${postId}/comments`, {
            cache: "default",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            const data = await response.json();
            setComments(data.content)
        } else {
            throw new Error("Failed to fetch comments");
        }

    }
    useEffect(() => {
        getPostsComments(postId)
    }, [postId])

    return (
        <div className='mb-5'>
            <div className=' md:h-[400px] overflow-y-auto scrollbar-hide'>
                {comments && comments?.map((comment: CommentDTO) => (
                    <CommentBox deleteComment={deleteComment} key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    )
}