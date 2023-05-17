"use client"
import React, { useEffect, useState } from 'react'
import { tags as topics } from '../store';
import Link from 'next/link';
import Tag from '@/types/Tag/Tag';
import { Chip } from '@mui/material';

type Props = {
    title: string,
    footer?: React.ReactElement;
}

export default function Tags({ title, footer }: Props) {

    return (
        <>
            <p className='font-semibold text-[16px] mb-5 py-4' >
                {title}
            </p>
            <div className="flex flex-wrap gap-2 border-slate-300 pb-10">
                {
                    topics.map((tag: Tag) => {
                        const { name, id, url } = tag;
                        return (
                            <Link key={id} href={url}>
                                <Chip key={tag.id} label={tag.name} clickable size='medium' />
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