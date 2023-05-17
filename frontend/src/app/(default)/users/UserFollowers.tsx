"use client"
import React, { useEffect, useState } from 'react'
import { followers as users } from '@/store'
import UserBio from '@/components/UserBio'
import User from '@/types/user/User'

type Props = {
    username?: string
}


const UserFollowers = (props: Props) => {

    const { username, } = props;
    const [followers, setFollowers] = useState<User[]>([])

    const fetchFollowingByUsername = (): void => {
        setFollowers(users)
    }

    useEffect(() => {
        if (username) {
            fetchFollowingByUsername()
        }
        //ToDo:some code here
    }, [username])

    return (
        <div>
            {
                users.map((user: User) => (
                    <UserBio key={user.userId} user={user} />
                ))
            }
        </div>
    )
}

export default UserFollowers
