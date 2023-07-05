"use client"
import Avatar from "@/components/Avatar";
import FollowUserButton from "@/components/FollowUserButton";
import User from "@/types/user/User";
import Image from "next/image";
import { type } from "os";
import { useState } from "react"

type Props = {
  user: User
}

const UserProfile = ({ user }: Props) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(false)
  return (
    <div className="hidden lg:flex space-x-4 items-center">
      <div className="hidden profile-picture lg:flex">
        <Avatar userId={user?.userId} username={user.username} image={user?.image} isMedium />
      </div>
      <div className="sm:flex flex-col items-start">
        <p className="lg:text-md font-semibold">{user.username}</p>
        <p className="hidden text-xs xl:flex md:text-sm  text-gray-600 font-light !line-clamp-1">
          {user?.bio}
        </p>
      </div>
      <div>
        <FollowUserButton />
      </div>
    </div>
  );
};

export default UserProfile;