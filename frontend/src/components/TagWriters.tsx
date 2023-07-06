"use client"
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Image from "next/image"
import User from '@/types/user/User';
import profile from "../../public/images/profile.png"

type Props = {
    totalStory: number,
    users: User[]
}
type Avatar = {
    alt: string;
    src: string;
}
async function TagWriters({ totalStory, users }: Props) {
    return (
        <div className='w-[360px] h-[160px] border-b-[0.4px] border-gray-500'>
            <div className="header flex justify-between items-center">
                <div>
                    <p className='font-bold leading-6 text-xl'>{totalStory}</p>
                    <p className='text-base text-gray-400'> Stories</p>
                </div>
                <div>
                    <p className='font-bold leading-6 text-xl'>{`${users.length}`}</p>
                    <p className='text-base text-gray-400'>Writers</p>
                </div>
            </div>
            <div className="bottom flex justify-center items-center mt-3">
                <AvatarGroup max={8}>
                    {users.map((user: User, index: number) => (
                        <Avatar key={index}>
                            <Image width={40} height={40} src={user.image != null ? user.image : profile.src} alt={`${user?.username} image`} />
                        </Avatar>
                    ))}
                </AvatarGroup>
            </div>
        </div>
    );
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