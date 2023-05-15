"use client"
import PostList from '@/components/PostList';
import Tags from '@/components/Tags';
import UserSummaryCard from '@/components/UserSummaryCard';
import React from 'react';


type Params = {
    params: {
        query: string;
    };
};

const SearchResultPage = ({ params: { query } }: Params) => {

    return (
        <div className='flex space-x-16 lg:divide-x-[1px] px-5 sm:px-10 md:px-15 lg:px-20 my-8'>
            <div className='w-full lg:w-[65%] px-2 '>
                <div className='flex flex-col space-y-7'>
                    <h1 className="md:text-2xl text-4xl space-y-5 lg:text-5xl mb-3">
                        Results for <span className="text-gray-600">{query}</span>
                    </h1>
                    <PostList />
                </div>
            </div>
            <div className='hidden lg:flex lg:w-[30%] px-2'>
                <div className="flex flex-col sticky">
                    <Tags title={`Topics matching ${query}`} />
                    <hr className="mt-4" />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default SearchResultPage;
