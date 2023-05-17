import Carousel from '@/components/Carousel'
import { tags } from '@/store'
import React from 'react'
import Image from "next/image"
import PostList from '@/components/PostList'
import Tags from '@/components/Tags'
import UserFollowers from "../../(default)/users/UserFollowers"

type Props = {}

export default function page({ }: Props) {
    return (
        <div className='flex lg:divide-x-[1px] sm:px-10 md:px-15 w-full h-screen'>
            <div className='w-[90%] mx-auto my-16 flex gap-40'>
                <div className='w-full lg:w-[50%]'>
                    <Carousel data={tags} width={800} />
                    <PostList />
                </div>
                <div className='hidden lg:flex lg:flex-col lg:w-[30%] mt-44'>
                    <div className='left-content flex-col gap-16'>
                        <div className="content items-start">
                            <h1 className='text-base font-medium leading-5 mb-9'>Staf Pics</h1>
                            <div className="box my-5">
                                <div className="user flex space-x-4">
                                    <Image
                                        src="/images/Ashley-Bretford.jpg"
                                        width={24}
                                        height={24}
                                        alt="profile-pic"
                                        className="rounded-full"
                                    />
                                    <p className='font-medium text-[13px]'>Asley Bertford</p>
                                </div>
                                <p className='text-[#292929] leading-5 font-bold line-clamp-2' >Lorem ipsum voluptatem ducimus deleniti voluptates eveniet tempora neque id earum facere cupiditate.
                                </p>
                            </div>
                            <div className="box my-5">
                                <div className="user flex space-x-4">
                                    <Image
                                        src="/images/Ashley-Bretford.jpg"
                                        width={24}
                                        height={24}
                                        alt="profile-pic"
                                        className="rounded-full"
                                    />
                                    <p className='font-medium text-[13px]'>Asley Bertford</p>
                                </div>
                                <p className='text-[#292929] leading-5 font-bold line-clamp-2' >Lorem ipsum voluptatem ducimus deleniti voluptates eveniet tempora neque id earum facere cupiditate.
                                </p>
                            </div>
                            <div className="box my-5">
                                <div className="user flex space-x-4">
                                    <Image
                                        src="/images/Ashley-Bretford.jpg"
                                        width={24}
                                        height={24}
                                        alt="profile-pic"
                                        className="rounded-full"
                                    />
                                    <p className='font-medium text-[13px]'>Asley Bertford</p>
                                </div>
                                <p className='text-[#292929] leading-5 font-bold line-clamp-2' >Lorem ipsum voluptatem ducimus deleniti voluptates eveniet tempora neque id earum facere cupiditate.
                                </p>
                            </div>
                            <div className="box my-5">
                                <div className="user flex space-x-4">
                                    <Image
                                        src="/images/Ashley-Bretford.jpg"
                                        width={24}
                                        height={24}
                                        alt="profile-pic"
                                        className="rounded-full"
                                    />
                                    <p className='font-medium text-[13px]'>Asley Bertford</p>
                                </div>
                                <p className='text-[#292929] leading-5 font-bold line-clamp-2' >Lorem ipsum voluptatem ducimus deleniti voluptates eveniet tempora neque id earum facere cupiditate.
                                </p>
                            </div>



                        </div>
                        <Tags title='Recommended topics' />
                        <UserFollowers></UserFollowers>
                    </div>
                </div>
            </div>
        </div >

    )
}