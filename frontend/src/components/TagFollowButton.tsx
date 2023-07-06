import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {
    tagId: number
}

const TagFollowButton = ({ tagId }: Props) => {

    const [isFollow, setIsFollow] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { push } = useRouter()

    const currentUser = useSession().data?.user;
    const accessToken = currentUser?.accessToken;
    const currentUserId = currentUser?.userId;

    useEffect(() => {
        setIsLoading(true)
        if (currentUserId && accessToken) {
            fetch(`http://localhost:8080/api/v1/users/${currentUserId}/tags/${tagId}/liked`)
                .then(response => response.json())
                .then(response => {
                    setIsFollow(response)
                    setIsLoading(false);
                }).catch(error => {
                    console.error(error);
                    setIsLoading(false);
                });
        }
        setIsLoading(false)
    }, [tagId, currentUserId, accessToken])


    async function tagFollow() {
        await fetch(`http://localhost:8080/api/v1/users/${currentUserId}/tags/${tagId}/follow`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + accessToken
            }
        })
    }
    async function unFollowTag() {
        await fetch(`http://localhost:8080/api/v1/users/${currentUserId}/tags/${tagId}/unfollow`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + accessToken
            }
        })
    }


    const toogleFollow = async (e) => {
        e.preventDefault();
        if (!accessToken) {
            return push("/auth/login")
        }
        setIsLoading(true)
        try {
            if (isFollow) {
                await unFollowTag()
                setIsFollow(false)
            }
            else {
                await tagFollow()
                setIsFollow(true)
            }

            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
        }
    }

    let followButtonClass = isFollow
        ? "bg-[#292929] text-white"
        : "bg-white text-black border border-black";

    return (
        <button
            onClick={(e) => toogleFollow(e)}
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
export default TagFollowButton;