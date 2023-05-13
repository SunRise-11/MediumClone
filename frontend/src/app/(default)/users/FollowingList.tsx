"use client"
import React, { useEffect, useState } from 'react'
import UserInfoBox from './UserInfoBox'
import { followers as users } from '@/store'
import Link from "next/link"
import User from '@/types/user/User'
import FollowerProfileCard from '@/components/FollowerProfileCard'

type Props = {
    username: string
}


const FollowingList = (props: Props) => {

    const { username } = props;
    const [followers, setFollowers] = useState<User[]>([])

    const fetchFollowingByUsername = (): void => {
        setFollowers(users)
    }

    useEffect(() => {
        fetchFollowingByUsername()
    }, [])


    return (
        <div>
            {
                followers.map((user: User) => (
                    <FollowerProfileCard key={user.userId} user={user} />
                ))
            }
        </div>
    )
}

export default FollowingList
