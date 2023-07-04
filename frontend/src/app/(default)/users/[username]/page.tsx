'use client';
import React, { useState } from 'react';
import { urlToTitle } from '@/util/urlToTitle';
import { posts as storePosts } from '@/store/index';
import Post from '@/components/Post';
import PostDTO from '@/types/Post/Post';

type Params = { params: { username: string } };

const UserProfile = async ({ params: { username } }: Params) => {

    const [isActive, setIsActive] = useState(false);


    console.log("UserID is: ", username)

    // const posts = storePosts.filter((post) => post.user.username === name);

    const { content } = await fetch(`http://192.168.43.164:8080/api/v1/users/${username}/posts?page=0&size=1&sort=asc`, { "cache": "no-cache" }).then((res) => res.json());
    return (
        <>
            <div className="px-5 md:px-10 lg:px-20 flex justify-between space-x-8 my-16">
                <div className="w-full md:w-[65%] order-first">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-3xl font-semibold items-start">{username}</h1>
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
                            {content.map((post: PostDTO) => (
                                <Post
                                    key={post.postId}
                                    post={post}

                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;