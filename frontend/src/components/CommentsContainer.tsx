"use client"
import { TextField } from '@mui/material';
import { Modal } from 'antd';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import PostComments from './PostComments';

type Props = {
    isModalVisible: boolean,
    setIsModalVisible: any
    postId: number
}
export default function WriteComment({ isModalVisible, setIsModalVisible, postId }: Props) {

    const [comment, setComment] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>()
    const currentUser = useSession().data?.user
    const { push, refresh } = useRouter()
    const accessToken = currentUser?.accessToken;
    const currentUserId = currentUser?.userId


    const postComment = async (data: any) => {

        const response = await fetch(`http://localhost:8080/api/v1/users/${currentUserId}/posts/${postId}/comments`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    }

    const deleteComment = async (commentId: number) => {
        await fetch(`http://localhost:8080/api/v1/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            },
        })

    }

    const sendComment = async () => {
        if (!accessToken)
            return push("/auth/login")
        setIsLoading(true)
        try {
            const body = {
                comment
            }
            await postComment(body)
            setIsLoading(false)
            refresh()
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }

    return (
        <Modal
            title="Comments"
            open={isModalVisible}
            footer={null}
            onCancel={() => {
                setIsModalVisible(false);
            }}
            className="fixed right-0 top-0"
            style={{ borderRadius: 0 }}
        >
            <div className="flex flex-col space-y-8 min-h-screen">
                <div className="flex justify-center write-comment mt-16">
                    <TextField
                        onChange={(e) => setComment(e.target.value)}
                        id="filled-textarea"
                        label="Write comment"
                        placeholder="Your comment here"
                        multiline
                        variant="filled"
                        rows={3}
                        className="w-full"
                        color="success"
                    />
                </div>
                <div>
                    <button onClick={() => sendComment()} className="px-4 py-2 bg-green-500 text-white rounded-3xl">
                        {isLoading ? "Sending..." : "Post"}
                    </button>
                </div>

                <div>
                    <PostComments postId={postId} deleteComment={deleteComment} />
                </div>
            </div>
        </Modal>
    )
}