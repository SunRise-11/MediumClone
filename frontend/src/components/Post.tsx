'use client'
import Image from "next/image";
import Link from "next/link";
import { savePost } from "../../public/icons/icons";
import { usePathname } from 'next/navigation';
import PostMenu from "./PostMenu";
import { useEffect, useState } from "react";
import { formatDate } from "../util/DateFormat";
import PostDTO from "@/types/Post/Post";

type Props = {
    post: PostDTO,
    handleDeletePost: (e: React.FormEvent<HTMLButtonElement>, postId: number) => void
};


const Post = ({ post, handleDeletePost }: Props) => {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const url = usePathname();


    const isValidPath = (url: string): boolean => {
        const pattern = /^\/users\/([^/]+)$/;
        const isSamePath = url.match(pattern);
        return isSamePath != null;
    };

    const { title, content, postId, image: postImage, readingTime, pinned, createdAt, user, tags } = post;
    const { username, image: userImage } = user;


    return (
        <div className="flex gap-[34px] w-[100%] my-16 ">
            <div className="flex flex-col gap-2 w-[70%]">
                <div className="flex items-center gap-2">
                    <Image
                        src={`/images/${userImage}`}
                        className="rounded-full"
                        width={24}
                        height={36}
                        alt="profile pic"
                    />
                    <h1 className="text-sm font-semibold">{username}</h1>
                </div>
                <Link href="/posts/how-to-get-started-with-learning-turkish">
                    <p className="leading-[20px] md:leading-[28px] md:text-[22px] font-bold text-slate-800 space-y-[2px] cursor-pointer">
                        {title}
                    </p>
                </Link>
                <p className="hidden md:block text-md text-light text-[#787878] md:!line-clamp-2 cursor-pointer">
                    {content}
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <p className="text-light text-[#787878] text-sm">
                            {`${formatDate(createdAt)} · ${readingTime} min read ·`}
                        </p>
                        <span className="hidden md:flex  text-[#787878] text-sm border rounded-3xl px-2 py-[2px] bg-[#F2F3F2] cursor-pointer hover:bg-[#d9dbdb]">
                            {tags != undefined && tags?.length > 0 ? tags[0].name : "Default"}
                        </span>
                    </div>

                    {/* Bookmark Icon */}
                    <div className="flex space-x-1">
                        {savePost}
                        {showMenu && (<PostMenu postId={postId} username={username} pinned={pinned} handleDeletePost={handleDeletePost} />)}
                    </div>
                </div>
            </div>

            <div className="w-[30%] relative">
                <Image
                    src="/images/learn-turkish.jpg"
                    alt="ChatGPT image"
                    height={128}
                    width={192}
                />
            </div>
        </div>
    );
};
export default Post