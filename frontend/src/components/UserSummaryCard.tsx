
"use client"
import User from '@/types/user/User'
import React from 'react'
import Link from "next/link"
import useFollow from '@/hook/useFollow'
import Avatar from './Avatar'
import defaultImage from "../../public/images/abbas-profile.jpg"
import FollowUserButton from './FollowUserButton'

type Props = {
    user: User
}

const UserSummaryCard = (props: Props) => {
    const { user: { bio, email, image, username, userId } } = props;

    const { isFollowing, toggleFollow } = useFollow(userId);

    return (
        <div className='flex items-center my-4'>
            <div className="left h-full  flex items-center space-x-5 w-[60%]">
                <Avatar username={username} image={defaultImage.src} isMedium />
                <div className="detail flex flex-col w-[80%] ">
                    <Link href={`users/${username}`}>
                        <p className='text-[#292929] text-sm'>{username}</p>
                    </Link>
                    <p className='text-[#757575] text-xs'>{bio}</p>
                </div>
            </div>
            <div className="right">
                <FollowUserButton />
            </div>
        </div>
    )
}

export default UserSummaryCard
