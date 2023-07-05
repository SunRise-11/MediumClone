"use client"
import React, { useEffect, useState } from 'react'
// import { followers as users } from '@/store'
import UserBio from '@/components/UserBio'
import User from '@/types/user/User'
import { useSession } from 'next-auth/react'




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
        </div>
    )
}

export default UserFollowers
