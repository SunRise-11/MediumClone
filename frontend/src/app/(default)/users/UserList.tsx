import User from '@/types/user/User';
import { useSession } from 'next-auth/react';
import React from 'react'
import UserBio from '@/components/UserBio'
type Props = {}

const UserList = async (props: Props) => {

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
export default UserList;