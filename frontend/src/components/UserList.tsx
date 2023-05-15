"use client"
import React from 'react'
import { followers } from '@/store'
import UserSummaryCard from './UserSummaryCard'

const UserList = () => {

    return (
        <>
            {
                followers.map(user => (
                    <UserSummaryCard key={user.userId} user={user} />
                ))
            }
        </>
    )
}

export default UserList
