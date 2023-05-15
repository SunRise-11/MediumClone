"use client"
import React, { useEffect, useState } from 'react'
import { tags as topics } from '../store';
import Link from 'next/link';
import TagFooter from './TagFooter';
import Tag from '@/types/Tag/Tag';
import { title } from 'process';
import { Chip } from '@mui/material';

type Props = {
    title: string,
    footer?: React.ReactElement;
}

export default function Tags({ title, footer }: Props) {

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
                {title}
            </h1>
            <div className="flex flex-wrap gap-2 border-slate-300 pb-10">
                {
                    tags.map((tag: Tag) => {
                        const { name, id } = tag;
                        return (
                            <Link key={id} href={`tags/${name}`}>
                                <Chip key={tag.id} label={tag.name} clickable />
                            </Link>
                        );
                    })}
            </div>
            {
                footer
            }
        </>
    )
}