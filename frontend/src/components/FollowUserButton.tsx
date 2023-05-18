"use client";
import React, { useState } from "react";

type Props = {

};

const FollowUserButton: React.FC<Props> = () => {
    const [isFollow, setIsFollow] = useState<boolean>(false);

    let followButtonClass = isFollow
        ? "bg-[#292929] text-white"
        : "bg-white text-black border border-black";

    return (
        <>
            <button
                onClick={() => setIsFollow(!isFollow)}
                className={`${followButtonClass} 
                  rounded-full
                  w-[80px] h-[33px]
                  sm:flex 
                  justify-center 
                  items-center 
                  sm:text-sm 
                  duration-150
                  transition-all
                  pt-[4px]
                  px-[12px] 
                  pb-[6px]`}
            >
                {isFollow ? "Following" : "Follow"}
            </button >
        </>
    );
};

export default FollowUserButton;