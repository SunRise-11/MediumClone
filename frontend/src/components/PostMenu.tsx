"use client"
import { Button, Popover, Space } from "antd";
import React, { MouseEventHandler } from "react";
import { moreIcon } from "../../public/icons/icons";
import Link from "next/link";
import { getPostById } from "@/util/getPostById";


type Props = {
    pinned: boolean,
    username: string,
    postId: number,
    hanldePin: () => void

}

const PostMenu: React.FC<Props> = ({ pinned, username, postId, hanldePin }) => {

    const handleDeletePost = (e, postId: number) => {

    }


    const content = (
        <div className="flex flex-col items-center justify-center">
            <Link href={`/posts/update/${postId}`}>
                <Button
                    type="text"
                    className="!text-blue-600"
                >
                    Edit
                </Button>
            </Link>
            <Button
                onClick={(e: any) => handleDeletePost(e, postId)}
                type="text"
                className="!text-red-500 hover:!text-red-600"
            >
                Delete
            </Button>
            <Button
                onClick={hanldePin}
                type="text"
                className="text-black"
            >
                {pinned ? "Unpin Story" : "Pin Story"}
            </Button>
        </div>
    );
    return (

        <>
            <Space wrap>
                <Popover
                    content={content}
                    trigger="click"
                    className="cursor-pointer text-gray-500"
                >
                    {moreIcon}
                </Popover>
            </Space>
        </>

    )
}



export default PostMenu;