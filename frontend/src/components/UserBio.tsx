"use client"
import User from '@/types/user/User'
import React, { useState } from 'react'
import Link from "next/link"
import useFollow from '@/hook/useFollow'
import Avatar from '../components/Avatar'
import FollowUserButton from './FollowUserButton'
import { titleToUrl } from '@/util/titleToUrl'

type Props = {
    user: User
}

const FollowerProfileCard = (props: Props) => {
    const { user: { bio, email, image, username, userId } } = props;
    // const usernameUrl = titleToUrl(username)

    return (
        <div className='w-full flex justify-between items-center my-4'>
            <div className="left h-full  flex  justify-between w-[60%]">
                <Avatar userId={userId} username={username} image={image} width={30} height={30} />
                <div className="detail flex flex-col w-[80%] ">
                    <Link href={`/users/${userId}`}>
                        <p className='text-[#292929] text-sm'>{username}</p>
                    </Link>
                    <p className='text-[#757575] text-xs '>{bio}</p>
                </div>
            </div>
            <div className="right">
                <FollowUserButton />
            </div>
        </div>
    )
}

export default FollowerProfileCard
