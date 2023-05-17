"use client"
import FollowUserButton from "@/components/FollowUserButton";
import Image from "next/image";
import { useState } from "react"

const UserProfile = () => {
  const [isFollowed, setIsFollowed] = useState<boolean>(false)
  return (
    <div className="hidden lg:flex space-x-4 items-center">
      <div className="hidden profile-picture lg:flex">
        <Image
          src="/images/Mike-Greenwood.jpg"
          width={40}
          height={40}
          alt="profile picture"
          className="hidden md:flex rounded-full"
        />
      </div>
      <div className="sm:flex flex-col items-start">
        <p className="lg:text-md font-semibold">Au Chang</p>
        <p className="hidden text-xs xl:flex md:text-sm  text-gray-600 font-light !line-clamp-1">
          I love observing and writing
        </p>
      </div>
      <div>
        <FollowUserButton />
      </div>
    </div>
  );
};

export default UserProfile;