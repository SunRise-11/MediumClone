"use client"
import PostList from '@/components/PostList';
import Tags from '@/components/Tags';
import React from 'react';
import UserFollowers from '../../users/UserFollowers';
import { useSearch } from '@/hook/useSearch';
import { useState } from "react"
import Post from '@/components/Post';
import PostDTO from '@/types/Post/Post';


type Params = {
    params: {
        query: string;
    };
};
const SearchResultPage = async ({ params: { query } }: Params) => {

    const [size, setSize] = useState(5)
    const [page, setPage] = useState(0)
    const [data, setData] = useState({})


    const res = await fetch(`http://localhost:8080/api/v1/posts/search?query=${query}&currentPage=${page}&currentSize=${size}`)
        .then(res => res.json())

    const { content } = res;

    return (
        <div className='flex space-x-16 lg:divide-x-[1px] px-5 sm:px-10 md:px-15 lg:!px-32 my-20'>
            <div className='w-full lg:w-[60%]'>
                <div className='flex flex-col space-y-7 text-sm'>
                    <h1 className="flex space-y-5 lg:text-5xl text-3xl mb-3 text-gray-500 truncate">
                        Results for <p className="text-gray-800 mx-2">{query}</p>
                    </h1>
                    <div className='text-sm'>
                        {
                            (content?.map((post: PostDTO) => (
                                <Post post={post} key={post.postId} />
                            )))
                        }
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex lg:flex-col lg:w-[30%]'>
                <div className='static h-screen pl-16'>
                    <div>
                        <Tags title='Discover more of what matters to you' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-base font-medium leading-5'>Who To Follow</h1>
                        <UserFollowers />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SearchResultPage;
