"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProfileCard from '@/components/ProfileCard'
import { usePathname } from 'next/navigation';
import UserInfoBox from './UserInfoBox'
import User from '@/types/user/User'
// import { followers as users } from '@/store'
import Link from "next/link"
import profile from "../../../../public/images/profile.png"
import { titleToUrl } from '@/util/titleToUrl';
import { urlToTitle } from '@/util/urlToTitle';
import { useUser } from '@/hook/useUser';
import { CircularProgress } from '@mui/material';
import { useSession } from 'next-auth/react';



const AccountProfile = async ({ userId }: { userId: number }) => {

    // const [followers, setFollowers] = useState<User[]>([])
    const [visibilityEditModal, setVisilityEditModal] = useState<boolean>(false)

    // const username = splitDataFromUrl(usePathname())
    // const name = urlToTitle(splitDataFromUrl(usePathname()))
    // const userImage = usernameToImage(name);

    // const name = urlToTitle(splitDataFromUrl(path))

    // console.log(name);


    // function splitDataFromUrl(url: string): any {
    //     if (!url) return null;
    //     const data = url?.split("/")[2]
    //     return data
    // }

    // const fetchFollowingByUsername = (): void => {
    //     setFollowers(users)
    // }
    const currentUser = useSession().data?.user;

    const user: User = await fetch(`http://localhost:8080/api/v1/users/${userId}`).then((res) => res.json());

    const followed: User[] = await fetch(`http://localhost:8080/api/v1/following/${userId}`).then((res) => res.json());

    const handleCloseModal = () => {
        setVisilityEditModal(false)
    }

    const handleOpenModal = () => {
        setVisilityEditModal(true)
    }

    // useEffect(() => {
    //     fetchFollowingByUsername()
    // }, [])


    // if (isLoading) {
    //     return null;
    // }
    // console.log(user);


    // const { username, image, userId } = user;


    return (
        <div className="w-full  hidden md:flex md:w-[35%] order-last md:fixed md:top-[100px] md:right-0 md:h-screen">
            <div className="profile flex flex-col space-y-3 ml-8">
                <Link href={`/users/${user.userId}`}>
                    <Image
                        src={user.image != null ? user.image : profile.src} // Route of the image file
                        height={88}
                        width={88}
                        alt="Profile Picture"
                        className="rounded-full"
                    />
                    <h1 className="text-[16px] font-semibold">{user.username}</h1>
                </Link>
                <p className="text-[14px] text-slate-500 text-light">{`${followed.length} followers`}</p>
                <p className="text-[14px] text-slate-500 text-light text-clip w-[70%]">
                    {user.bio}
                </p>
                {currentUser?.userId == user.userId &&
                    <p
                        className="text-[14px] font-light text-[#1A8917] cursor-pointer pt-8"
                        onClick={() => handleOpenModal()}
                    >
                        Edit Profile
                    </p>}
                <div className="flex justify-center items-center w-[50%]">
                    <ProfileCard visibilityEditModal={visibilityEditModal} handleCloseModal={handleCloseModal} />
                </div>
                <h1>Following</h1>
                {
                    followed?.slice(0, 5).map((user: User) => (
                        <UserInfoBox key={user.userId} image={user?.image} userId={user?.userId} username={user?.username} />
                    ))
                }
                {
                    followed.length > 3 && <Link href={`/users/${user.userId}/following`}>
                        <span className='cursor-pointer text-xs mt-2 text-[#191919] hover:text-gray-600'>See All({`${followed.length}`})</span>
                    </Link>
                }
            </div>
        </div>
    )
}

export default AccountProfile
