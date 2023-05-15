"use client"
import React, { useEffect, useState } from 'react'
import { tags as topics } from '../store';
import Link from 'next/link';
import TagFooter from './TagFooter';
type Props = {}

type Tag = {
    id: number,
    name: string, 
    url: string
}

export default function Tags({ }: Props) {

    const [tags, setTags] = useState<Tag[]>([]);

    const fetchAllTag = () => {
        //burası gereksiz :) sadece simule amaçlı 
        setTags(topics);
        //ToDo: some code here 
    };

    useEffect(() => {
        fetchAllTag()
    }, [])


    return (
        <>
            <h1 className="font-semibold text-[16px] mb-5 py-4">
                Discover more of what matters to you
            </h1>
            <div className="flex flex-wrap gap-2 border-slate-300 pb-10">
                {
                    tags.map((tag: Tag) => {
                        const { name, id, url } = tag;

                        return (
                            <Link key={id} href={url}>
                                <p className="px-4 py-[6px] border border-slate-300 rounded-xl text-slate-500 text-sm cursor-pointer">
                                    {name}
                                </p>
                            </Link>
                        );
                    })}
            </div>
            <TagFooter />
        </>
    )
}