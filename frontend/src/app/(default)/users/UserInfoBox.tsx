import Link from "next/link"
import { moreIcon } from '../../../../public/icons/icons'
import Avatar from '@/components/Avatar'


type Props = {
    userId: number,
    username: string
    image?: string
}

const UserInfoBox = (props: Props) => {
    const { username, image } = props;
    return (
        <div className='w-full my-2'>
            <div className='w-[60%] flex justify-between items-center'>
                <Link href={`/users/${username}`} className="flex justify-between items-center space-x-3">
                    <Avatar image={image} username={username} height={25} width={25} />
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