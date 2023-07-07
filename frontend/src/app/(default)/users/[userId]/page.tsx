'use client';
import React, { useEffect, useState } from 'react';
import Post from '@/components/Post';
import PostDTO from '@/types/Post/Post';
import AccountProfile from '../AccountProfile'
import User from '@/types/user/User';

type Params = { params: { userId: string } };

const UserProfile = async ({ params: { userId } }: Params) => {

    const [isActive, setIsActive] = useState(false);
    const [posts, setPosts] = useState<PostDTO[]>()
    const [user, setUser] = useState<User>();


    console.log("UserID is: ", userId)


    const getPostsByUser = async (userId: number) => {
        const res = await fetch(`http://localhost:8080/api/v1/users/${userId}/posts?page=0&size=1&sort=asc`,
            { "cache": "no-cache" }).then((res) => res.json());
        setPosts(res.content)
    }

    const getUserById = async (userId: number) => {
        const res = await fetch(`http://localhost:8080/api/v1/users/${userId}`).then((res) => res.json());
        setUser(res)
    }

    useEffect(() => {
        getUserById(parseInt(userId))
        getPostsByUser(parseInt(userId))
    }, [userId])

    return (
        <>
            <div className="px-5 md:px-10 lg:px-20 flex justify-between space-x-8 my-16">
                <div className="w-full md:w-[65%] order-first">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-3xl font-semibold items-start">{user?.username}</h1>
                        <div className="flex items-center space-x-8 border-b text-gray-600 border-gray-200 mt-8">
                            <p
                                onClick={() => setIsActive(false)}
                                className={`py-4 px-2 ${!isActive && 'border-b'
                                    } border-gray-950 cursor-pointer`}
                            >
                                Home
                            </p>
                            <p
                                onClick={() => setIsActive(true)}
                                className={`py-4 px-2 cursor-pointer ${isActive && 'border-b'
                                    } border-gray-950`}
                            >
                                About
                            </p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            {(posts && posts.length > 0) ? (posts.map((post: PostDTO) => (
                                <Post
                                    key={post.postId}
                                    post={post}

                                />
                            ))) : (<p className="text-2xl text-gray-800 italic text-center ">No Post Available...</p>)}
                        </div>
                    </div>
                </div>
                {/* @ts-expect-error Server Component */}
                <AccountProfile userId={parseInt(userId)} />
            </div>
        </>
    );
};

export default UserProfile;
