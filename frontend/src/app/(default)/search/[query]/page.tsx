
"use client"
import Button from '@/components/Button';
import PostList from '@/components/PostList';
import React from 'react';
import { tags } from '@/store'
import { Chip } from '@mui/material';
import Tag from '@/types/Tag/Tag';

type Params = {
    params: {
        query: string;
    };
};

const SearchResultPage = ({ params: { query } }: Params) => {

    return (
        <div className="w-[75%] mx-auto mt-7 md:divide-x-[1px]">
            <div className="header">
                <h1 className="md:text-3xl text-4xl lg:text-5xl">
                    Results for <span className="text-gray-600">{query}</span>
                </h1>
            </div>
            <div className="flex justify-between items-start gap-9">
                <div className="left w-[60%]">
                    <PostList />
                </div>
                <div className="flex flex-col sticky top-2 w-[30%]">
                    <div className="wrapper flex flex-col">
                        <h1 className='text-lg text-[#191919] font-semibold'>Topics matching air</h1>
                        <div className="topics flex flex-wrap gap-2 mt-4">
                            {
                                tags.map((tag: Tag) => (
                                    <Chip className='mt-1' key={tag.id} label={tag.name} clickable />
                                ))
                            }
                        </div>
                    </div>
                    <hr className="mt-4" />
                    {/* <TopWriters /> */}
                </div>
            </div>
        </div>
    );
};

export default SearchResultPage;
