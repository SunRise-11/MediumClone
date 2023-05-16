import Image from "next/image";

const UserProfile = () => {
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
        <button className="hidden lg:flex border bg-green-500 text-white py-1 px-3 rounded-2xl">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserProfile;