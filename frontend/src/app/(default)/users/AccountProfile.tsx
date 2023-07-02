"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProfileCard from '@/components/ProfileCard'
import { usePathname } from 'next/navigation';
import UserInfoBox from './UserInfoBox'
import User from '@/types/user/User'
import { followers as users } from '@/store'
import Link from "next/link"
import { titleToUrl } from '@/util/titleToUrl';
import { urlToTitle } from '@/util/urlToTitle';
import { useUser } from '@/hook/useUser';
import { CircularProgress } from '@mui/material';

type Props = {

}

const UserProfile = (props: Props) => {

    const [followers, setFollowers] = useState<User[]>([])
    const [visibilityEditModal, setVisilityEditModal] = useState<boolean>(false)

    const path = usePathname()

    const name = urlToTitle(splitDataFromUrl(path))

    console.log(name);


    const { user, isError, isLoading } = useUser(name)

    function splitDataFromUrl(url: string): any {
        if (!url) return null;
        const data = url?.split("/")[2]
        return data
    }

    const fetchFollowingByUsername = (): void => {
        setFollowers(users)
    }

    const handleCloseModal = () => {
        setVisilityEditModal(false)
    }
    const handleOpenModal = () => {
        setVisilityEditModal(true)
    }

    useEffect(() => {
        fetchFollowingByUsername()
    }, [])


    if (isLoading) {
        return null;
    }
    console.log(user);


    // const { username, image, userId } = user;


    return (
        <div className="w-full hidden md:flex md:w-[35%] order-last md:fixed md:top-[100px] md:right-0 md:h-screen">
            <div className="profile flex flex-col space-y-3 ml-8">
                <Link href={`/users/${name}`}>
                    <Image
                        src={"/image"} // Route of the image file
                        height={88}
                        width={88}
                        alt="Profile Picture"
                        className="rounded-full"
                    />
                    <h1 className="text-[16px] font-semibold">{name}</h1>
                </Link>
                <p className="text-[14px] text-slate-500 text-light">2 followers</p>
                <p className="text-[14px] text-slate-500 text-light text-clip w-[70%]">
                    Süleyman Demirel University Computer Engineering student jsfkjsdkfj ksjdfnjksdnk
                </p>

                <p
                    className="text-[14px] font-light text-[#1A8917] cursor-pointer pt-8"
                    onClick={() => handleOpenModal()}
                >
                    Edit Profile
                </p>
                <div className="flex justify-center items-center w-[50%]">
                    <ProfileCard visibilityEditModal={visibilityEditModal} handleCloseModal={handleCloseModal} />
                </div>
                <h1>Following</h1>
                {
                    followers?.slice(0, 5).map((follow: any) => (
                        <UserInfoBox key={follow.userId} image={follow.image} userId={follow.userId} username={follow.username} />
                    ))

                }
                {
                    users.length > 5 && <Link href={`/users/${titleToUrl(name)}/following`}>
                        <span className='cursor-pointer text-xs mt-2 text-[#191919] hover:text-gray-600'>See All({`${users.length}`})</span>
                    </Link>
                }
            </div>
        </div>
    )
}

export default UserProfile
