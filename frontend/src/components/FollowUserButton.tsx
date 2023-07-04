"use client";
import React, { useState } from "react";

type Props = {
    isFollow: boolean,
    toogleFollow: () => void,
};

const FollowUserButton: React.FC<Props> = ({ isFollow, toogleFollow }: Props) => {

    let followButtonClass = isFollow
        ? "bg-[#292929] text-white"
        : "bg-white text-black border border-black";

    return (
        <>
            <button
                onClick={toogleFollow}
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
            >
                {isFollow ? "Following" : "Follow"}
            </button >
        </>
    );
};

export default FollowUserButton;