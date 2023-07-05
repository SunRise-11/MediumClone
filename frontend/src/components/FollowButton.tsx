"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

type Props = {
    userId: number;
};



function FollowButton({ userId }: Props) {
    const currentUser = useSession().data?.user;
    const router = useRouter();
    const currentUserId = currentUser?.userId;
    const accessToken = currentUser?.accessToken;

    const [isFollow, setIsFollow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    async function followUser(currentUserId: number, userId: number, accessToken: string | undefined): Promise<boolean> {
        const response = await fetch(`http://localhost:8080/api/v1/users/${currentUserId}/follow/${userId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        });

        return response.ok;
    }

    async function unfollowUser(currentUserId: number, userId: number, accessToken: string | undefined): Promise<boolean> {
        const response = await fetch(`http://localhost:8080/api/v1/users/${currentUserId}/unfollow/${userId}`, {
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
            fetch(`http://localhost:8080/api/v1/following/${currentUserId}/followed/${userId}`, {
                cache: "no-cache"
            })
                .then(res => res.json())
                .then(response => {
                    setIsFollow(response);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setIsLoading(false);
                });
        }
    }, [currentUserId, accessToken, userId]);

    const toggleFollow = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (currentUserId == userId)
            return

        if (!accessToken) {
            return router.push("/auth/login");
        }

        setIsLoading(true);

        try {
            if (isFollow) {
                await unfollowUser(currentUserId!, userId, accessToken);
                setIsFollow(false);
            } else {
                await followUser(currentUserId!, userId, accessToken);
                setIsFollow(true);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    let followButtonClass = isFollow
        ? "bg-[#292929] text-white"
        : "bg-white text-black border border-black";

    return (
        <button
            onClick={toggleFollow}
            className={`${followButtonClass} 
        rounded-full
        w-[90px] h-[30px]
        sm:flex 
        justify-center 
        items-center 
        sm:text-sm 
        duration-150
        transition-all
        py-[1px]
        px-[12px]
        sm:px-[16px] 
      `}
            disabled={isLoading}
        >
            {isLoading ? "Loading..." : isFollow ? "Following" : "Follow"}
        </button>
    );
}

export default FollowButton;
