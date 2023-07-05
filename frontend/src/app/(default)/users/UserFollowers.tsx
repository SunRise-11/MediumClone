"use client"
import React, { useEffect, useState } from 'react'
// import { followers as users } from '@/store'
import UserBio from '@/components/UserBio'
import User from '@/types/user/User'
import { useSession } from 'next-auth/react'




const UserFollowers = async () => {

    const currentUser = useSession().data?.user;
    const followed: User[] = await fetch(`http://192.168.43.164:8080/api/v1/following/${currentUser.userId}`).then((res) => res.json());

    return (
        <div>
            {followed?.map((user: User) => (
                <>
                    {/* @ts-expect-error Server Component */}
                    <UserBio key={user.userId} user={user} />
                </>
            ))}
        </div>
    )
}

export default UserFollowers
