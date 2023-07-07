"use client"
import React, { useEffect, useState } from 'react'
import { clapIcon } from '../../public/icons/icons'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Props = {
    postId: number,
    likeCount?: number | null
}

export default function PostLikeButton({ postId, likeCount }: Props) {

    const currentUser = useSession().data?.user;
    const currentUserId = currentUser?.userId;
    const accessToken = currentUser?.accessToken;

    const { push } = useRouter()
    const [isLiked, setIsLiked] = useState(false)
    const [isloading, setIsLoading] = useState(false)


    async function createOneLike(currentUserId: number, accessToken: string, postId: number) {
        const response = await fetch(`http://localhost:8080/api/v1/users/${currentUserId}/posts/${postId}/like`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        });

        return response.ok;
    }

    async function deleteOneLike(currentUserId: number, accessToken: string, postId: number) {
        const response = await fetch(`http://localhost:8080/api/v1/users/${currentUserId}/posts/${postId}/unlike`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        });

        return response.ok;
    }

    useEffect(() => {
        if (currentUserId && accessToken) {
            setIsLoading(true);
            fetch(`http://localhost:8080/api/v1/users/${currentUserId}/posts/${postId}/liked`, {
                cache: "no-cache"
            })
                .then(res => res.json())
                .then(response => {
                    setIsLiked(response)
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setIsLoading(false);
                });
        }
    }, [currentUserId, accessToken, postId]);


    const toggleLike = async () => {
        if (!accessToken) {
            return push("/auth/login");
        }

        setIsLoading(true);

        try {
            if (isLiked) {
                await deleteOneLike(currentUserId!, accessToken, postId);
                setIsLiked(false);
            } else {
                await createOneLike(currentUserId!, accessToken, postId);
                setIsLiked(true);
            }
        } catch (error) {
            setIsLoading(false)
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <button onClick={() => toggleLike()} className="flex space-x-2 text-gray-500">
            <span className={`cursor-pointer ${isLiked && "text-yellow-200"}`}>{clapIcon}</span>
            <span className="">{isloading ? "Loading..." : likeCount}</span>
        </button>
    )
}