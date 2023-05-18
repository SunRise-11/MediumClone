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
                  w-[80px] h-[30px]
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
            >
                {isFollow ? "Following" : "Follow"}
            </button >
        </>
    );
};

export default FollowUserButton;