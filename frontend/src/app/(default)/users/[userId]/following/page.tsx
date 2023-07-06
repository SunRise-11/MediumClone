"use client"
import React, { useState } from 'react'
import { carrotIcon } from '../../../../../../public/icons/icons';
import Link from 'next/link';
import { followers } from '@/store';
import UserFollowers from '../../UserFollowers';
import { titleToUrl } from '@/util/titleToUrl';
import User from '@/types/user/User';

type Params = { params: { userId: string } };

const Page = async ({ params: { userId } }: Params) => {

    const [isActive, setIsActive] = useState<boolean>(false);

    const user: User = await fetch(`http://localhost:8080/api/v1/users/${userId}`).then((res) => res.json());


    return (
        <div className='w-full md:w-[65%] order-first  h-10 flex justify-start flex-col'>
            <div className="flex flex-col px-32 pt-16 mt-8">
                <div className="header flex gap-4 font-normal text-sm">
                    <Link href={`/users/${userId}`} className=' '>
                        <p className=' text-gray-700 hover:text-gray-500'>{user.username}</p>
                    </Link>
                    <span> {`>`} </span>
                    <p className='text-gray-900'>Following</p>
                </div>
                <div className="mt-6 text-4xl font-medium leading-10">
                    {`${followers.length} Following`}
                </div>
                <div className="flex items-center space-x-8 border-b text-gray-600 border-gray-200 mt-8">
                    <p onClick={() => setIsActive(false)} className={`py-4 px-2 ${!isActive && "border-b"} border-gray-950 cursor-pointer`}>
                        People
                    </p>
                    <p onClick={() => setIsActive(true)} className={`py-4 px-2 cursor-pointer ${isActive && "border-b"} border-gray-950`}>About</p>
                </div>
                {/* @ts-expect-error Server Component */}
                <UserFollowers userId={user.userId} />
            </div>
        </div>
    )
}

export default Page

/***/