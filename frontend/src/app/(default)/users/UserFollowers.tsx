"use client"
import React, { useEffect, useState } from 'react'
// import { followers as users } from '@/store'
import UserBio from '@/components/UserBio'
import User from '@/types/user/User'




const UserFollowers = async ({ userId }: { userId: string }) => {

    // const { username } = props;
    // const [followers, setFollowers] = useState<User[]>([])

    // const fetchFollowingByUsername = (): void => {
    //     setFollowers(users)
    // }

    // useEffect(() => {
    //     if (username) {
    //         fetchFollowingByUsername()
    //     }
    //     //ToDo:some code here
    // }, [username])

    const followed: User[] = await fetch(`http://192.168.43.164:8080/api/v1/following/${userId}`).then((res) => res.json());


    return (
        <div>
            {
                followed.map((user: User) => (
                    <UserBio key={user.userId} user={user} />
                ))
            }
        </div>
    )
}

export default UserFollowers
