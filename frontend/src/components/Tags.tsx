"use client"
import React, { useEffect, useState } from 'react'
import { tags as topics } from '../store';
import Link from 'next/link';
import TagFooter from './TagFooter';
import Tag from '@/types/Tag/Tag';
import { title } from 'process';
import { Chip } from '@mui/material';

<<<<<<< HEAD
type Tag = {
    id: number,
    name: string, 
    url: string
=======
type Props = {
    title: string,
    footer?: React.ReactElement;
>>>>>>> bc34665c8b4cc9a46526cab3b9b23cc7dbe85bd0
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
<<<<<<< HEAD
                        const { name, id, url } = tag;

                        return (
                            <Link key={id} href={url}>
                                <p className="px-4 py-[6px] border border-slate-300 rounded-xl text-slate-500 text-sm cursor-pointer">
                                    {name}
                                </p>
=======
                        const { name, id } = tag;
                        return (
                            <Link key={id} href={`tags/${name}`}>
                                <Chip key={tag.id} label={tag.name} clickable />
>>>>>>> bc34665c8b4cc9a46526cab3b9b23cc7dbe85bd0
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