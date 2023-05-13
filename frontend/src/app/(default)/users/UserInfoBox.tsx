
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import defaultImage from "../../../../public/images/Ashley-Bretford.jpg"
import { moreIcon } from '../../../../public/icons/icons'
type Props = {
    userId: number,
    username: string
    image?: string
}

const UserInfoBox = (props: Props) => {
    const { userId, username, image } = props;
    return (
        <div className='w-full my-2'>
            <div className='w-[60%] flex justify-between items-center'>
                <Link href={`/users/${username}`} className="flex justify-between items-center space-x-3">
                    <Image
                        src={defaultImage ?? image}
                        width={15}
                        height={15}
                        alt="resim"
                        className='w-full rounded-full'
                    />
                    <p className='text-xs hover:underline duration-75 transition-transform'>{username}</p>
                </Link>
                <button>
                    {moreIcon}
                </button>
            </div>
        </div>
    )
}

export default UserInfoBox
/**
 * 
 * 
 * 
 * 
 * 
 */