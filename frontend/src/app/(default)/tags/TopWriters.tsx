import User from "@/types/user/User";
import UserProfile from "./UserProfile";
import FollowerProfileCard from "@/components/UserBio";

type Props = {
  users: [User]
}

const TopWriters = ({ users }: Props) => (
  <div className="hidden lg:flex flex-col space-y-4 mt-16">
    <h1 className="text-md font-semibold">Top Writers</h1>
    {
      users?.map((user) => (
        <FollowerProfileCard key={user.userId} user={user} />
      ))
    }
  </div>
);

export default TopWriters;