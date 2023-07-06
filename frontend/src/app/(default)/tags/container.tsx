import TagWriters from "@/components/TagWriters";
import PostDTO from "@/types/Post/Post";
import { useEffect, useState } from "react";
import TopWriters from "./TopWriters";
import User from "@/types/user/User";

type Props = {
    content: [PostDTO],
    totalElements: number
}

export default function Container({ content, totalElements }: Props) {

    const [uniqueUsers, setUniqueUsers] = useState<User[]>([]);

    useEffect(() => {
        const uniqueUsersSet = new Set<number>();
        const uniqueUsersArray: User[] = []; // Değişiklik burada yapıldı

        content.forEach((post: PostDTO) => {
            if (post.user && !uniqueUsersSet.has(post.user.userId)) {
                uniqueUsersSet.add(post.user.userId);
                uniqueUsersArray.push(post.user);
            }
        });
        setUniqueUsers(uniqueUsersArray);
    }, [content]);

    return (
        <>
            <TagWriters users={uniqueUsers} totalStory={totalElements} />
            <TopWriters users={uniqueUsers} />
        </>
    )
}
