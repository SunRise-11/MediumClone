
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

const useFollow = (userId: number) => {
    const currentUserId = 1;
    const { push } = useRouter()
    const isFollowing = useMemo(() => {
        //ToDO: some code here
        return true;
    }, [currentUserId, userId]);

    const toggleFollow = useCallback(async () => {
        if (!currentUserId || currentUserId == null) {
            return push("/auth/login")
        }

        try {
            let request;

            if (isFollowing) {
                request = () => { }//delete('/api/follow', { data: { userId } });
            } else {
                request = () => { }//post('/api/follow', { userId });
            }

            await request();



        } catch (error) {

        }
    }, [currentUserId, isFollowing, userId]);

    return {
        isFollowing,
        toggleFollow,
    }
}

export default useFollow;