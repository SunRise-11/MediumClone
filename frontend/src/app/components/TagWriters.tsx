"use client"
import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Image from "next/image"
import { avatars } from "../store/index"

type Props = {
    tag: {
        name: string;
    }
}
type Avatar = {
    alt: string;
    src: string;
}
const TagWriters: React.FC<Props> = ({ tag }) => {
    return (
        <div className='w-[360px] h-[160px] border-b-[0.4px] border-gray-500'>
            <div className="header flex justify-between items-center">
                <div>
                    <p className='font-bold leading-6 text-xl'>301K</p>
                    <p className='text-base text-gray-400'> Stories</p>
                </div>
                <div>
                    <p className='font-bold leading-6 text-xl'>{`${avatars.length}K`}</p>
                    <p className='text-base text-gray-400'>Writers</p>
                </div>
            </div>
            <div className="bottom flex justify-center items-center mt-3">
                <AvatarGroup max={8}>
                    {
                        avatars.map((avatar: Avatar, index: number) => (
                            <Avatar key={index}>
                                <Image width={40} height={40} src={avatar.src} alt={avatar.alt} />
                            </Avatar>
                        ))
                    }

                </AvatarGroup>
            </div>
        </div>
    )
}

export default TagWriters;
/**
 * 
 * 
 * 
 * 
 * 
 * 
 */