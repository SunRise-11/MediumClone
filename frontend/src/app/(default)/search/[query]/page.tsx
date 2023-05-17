"use client"
import PostList from '@/components/PostList';
import Tags from '@/components/Tags';
import React from 'react';
import UserFollowers from '../../users/UserFollowers';


type Params = {
    params: {
        query: string;
    };
};
const SearchResultPage = ({ params: { query } }: Params) => {

    return (
        <div className='flex space-x-16 lg:divide-x-[1px] px-5 sm:px-10 md:px-15 lg:!px-32 my-20'>
            <div className='w-full lg:w-[60%]'>
                <div className='flex flex-col space-y-7 text-sm'>
                    <h1 className="md:text-xl flex space-y-5 lg:text-5xl mb-3 text-gray-500 truncate">
                        Results for <p className="text-gray-800 mx-2">{query}</p>
                    </h1>
                    <div className='text-sm'>
                        <PostList />
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex lg:flex-col lg:w-[30%]'>
                <div className='static h-screen pl-16'>
                    <div>
                        <Tags title='Discover more of what matters to you' />
                    </div>
                    <div className='flex flex-col'>
                        <UserFollowers />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SearchResultPage;
