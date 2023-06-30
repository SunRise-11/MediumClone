import React from 'react'
import Link from 'next/link';
import Tag from '@/types/Tag/Tag';
import Chip from './Chip';

type Props = {
    title: string,
    footer?: React.ReactElement;
}


export default async function Tags({ title, footer }: Props) {

    const tags = await fetch("http://192.168.43.164:8080/api/v1/tags",
        { next: { revalidate: 10 } }
    )
        .then(response => response.json())


    return (
        <>
            <p className='font-semibold text-[16px] mb-5 py-4' >
                {title}
            </p>
            <div className="flex flex-wrap gap-2 border-slate-300 pb-10">
                {
                    tags.map((tag: Tag) => {
                        const { name, id } = tag;
                        return (
                            <Link key={id} href={`/tags/${name}`}>
                                <Chip label={tag.name} />
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