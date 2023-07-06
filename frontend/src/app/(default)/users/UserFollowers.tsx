"use client"
import React, { useEffect, useState } from 'react'
// import { followers as users } from '@/store'
import UserBio from '@/components/UserBio'
import User from '@/types/user/User'
import { useSession } from 'next-auth/react'



<<<<<<< HEAD

const UserFollowers = async () => {

    const currentUser = useSession().data?.user;
    const users: User[] = await fetch(`http://localhost:8080/api/v1/users`).then((res) => res.json());

    return (
        <div>
            {users?.map((user: User) => (
                <>
                    {/* @ts-expect-error Server Component */}
                    <UserBio key={user.userId} user={user} />
                </>
            ))}
=======

const UserFollowers = async ({ userId } : { userId : string}) => {

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

    const followed : User[] = await fetch(`http://192.168.43.164:8080/api/v1/following/${userId}`).then((res) => res.json());


    return (
        <div>
            {
                followed.map((user: User) => (
                    <>
                     {/* @ts-expect-error Server Component */}
                    <UserBio key={user.userId} user={user} />
                    </>
                ))
            }
>>>>>>> 0e1dd15d1ec58c45e68572cc9f49518985743891
        </div>
    )
}

export default UserFollowers
