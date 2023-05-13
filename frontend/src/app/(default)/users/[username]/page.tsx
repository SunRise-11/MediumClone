"use client";
import React, { useState } from "react";
import PostList from "@/components/PostList";

type Params = { params: { username: string } };


const UserProfile = ({ params: { username } }: Params) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <>
            <head>
                <title>{`${username}'s Profile`}</title>
            </head>
            <div className="px-5 md:px-10 lg:px-20 flex justify-between space-x-8 mt-16">
                <div className="w-full md:w-[65%] order-first">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-3xl font-semibold items-start">{username}</h1>
                        <div className="flex items-center space-x-8 border-b text-gray-600 border-gray-200 mt-8">
                            <p onClick={() => setIsActive(false)} className={`py-4 px-2 ${!isActive && "border-b"} border-gray-950 cursor-pointer`}>
                                Home
                            </p>
                            <p onClick={() => setIsActive(true)} className={`py-4 px-2 cursor-pointer ${isActive && "border-b"} border-gray-950`}>About</p>
                        </div>
                        <PostList />
                    </div>
                </div>
            </div >
        </>
    );
};

export default UserProfile;
