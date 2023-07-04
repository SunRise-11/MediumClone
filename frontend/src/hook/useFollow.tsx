
import { useSession } from "next-auth/react";
import { headers } from "next/dist/client/components/headers";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

const useFollow = (userId: number) => {
    const { data } = useSession();
    const { userId: currentUserId } = data?.user;
    const { push, refresh } = useRouter()
    const [isFollow, setIsFollow] = useState(false)

    const isFollowing = useMemo(async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/v1/following/${currentUserId}/followed/${userId}`, {
                cache: "no-cache"
            })
                .then(res => res.json())
            console.log(res);

            setIsFollow(res);
        } catch (error) {
            setIsFollow(false)
        }
    }, [currentUserId, userId])

    const toggleFollow = useCallback(async () => {
        if (!currentUserId || currentUserId == null)
            return push("/auth/login")
        try {
            let request;

            isFollowing
            if (isFollow) {
                request = () => fetch(`http://localhost:8080/api/v1/users/${currentUserId}/unfollow/${userId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + data?.user?.accessToken
                    }
                })
            } else {
                request = () => fetch(`http://localhost:8080/api/v1/users/${currentUserId}/follow/${userId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + data?.user?.accessToken
                    }
                })
            }
            await request()
            refresh()
        } catch (error) {
            console.log(error);
        }
    }, [currentUserId, isFollowing, userId]);

    return {
        isFollowing: isFollow,
        toggleFollow,
    }
}

export default useFollow;