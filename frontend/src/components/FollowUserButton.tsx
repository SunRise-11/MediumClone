"use client";
import React, { useEffect, useState } from "react";

type Props = {
    user: {
        userId: string;
    };
};

const FollowUserButton: React.FC<Props> = ({ user }) => {
    const { userId } = user;
    const [isFollow, setIsFollow] = useState<boolean>(false);

    const onClickFollow = () => {
        //ToDo: some code here
    };

    const onClickUnFollow = () => {
        //ToDo: some code here
    };

    useEffect(() => {
        if (!isFollow) onClickUnFollow();
        else onClickFollow();
    }, [isFollow]);

    let followButtonClass = isFollow
        ? "bg-[#292929] text-white"
        : "bg-white text-black border border-black";

    return (
        <>
            <button
                onClick={() => setIsFollow(!isFollow)}
                className={`${followButtonClass} rounded-full w-[80px] h-[33px] hidden sm:flex justify-center items-center sm:text-sm duration-150 transition-all pt-[4px] px-[12px] pb-[6px]`}
            >
                {isFollow ? "Following" : "Follow"}
            </button >
        </>
    );
};

export default FollowUserButton;