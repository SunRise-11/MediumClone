"use client"
import User from '@/types/user/User'
import React, { useState } from 'react'
import Link from "next/link"
import useFollow from '@/hook/useFollow'
import Avatar from '../components/Avatar'
import FollowUserButton from './FollowUserButton'
import { titleToUrl } from '@/util/titleToUrl'
import { useSession } from 'next-auth/react'
import { current } from '@reduxjs/toolkit'
import { useRouter } from "next/navigation";
type Props = {
    user: User
}

const FollowerProfileCard = async (props: Props) => {
    const { user: { bio, email, image, username, userId } } = props;
    const usernameUrl = titleToUrl(username)
    const currentUser = useSession()
    const router = useRouter()
    const currentUserId = currentUser.data?.user.userId;
    const [isFollow, setIsFollow] = useState(false)
    let response = false;
    if (currentUserId) {
        response = await fetch(`http://localhost:8080/api/v1/following/${currentUserId}/followed/${userId}`, {
            cache: "no-cache"
        })
            .then(res => res.json())
    }


    const toogleFollow = async (e) => {
        e.preventDefault()
        if (currentUser.data?.user.accessToken == null || currentUser.data?.user.accessToken == undefined) {
            return router.push("/auth/login")
        }
        if (response) {
            setIsFollow(false)
            await fetch(`http://localhost:8080/api/v1/users/${currentUserId}/unfollow/${userId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + currentUser.data?.user?.accessToken
                }
            })
        }
        else {
            setIsFollow(true)
            await fetch(`http://localhost:8080/api/v1/users/${currentUserId}/follow/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + currentUser.data?.user?.accessToken
                }
            })

        }
    }
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
                <FollowUserButton isFollow={response || isFollow} toogleFollow={(e) => toogleFollow(e)} />
            </div>
        </div>
    )
}

export default FollowerProfileCard
