"use client"
import React, { useEffect, useState } from 'react'
import { followers as users } from '@/store'
import UserBio from '@/components/UserBio'
import User from '@/types/user/User'

type Props = {
    username?: string
}


const UserFollowers = async (props: Props) => {

    const users = await fetch("http://localhost:8080/api/v1/users").then(res => res.json())

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
