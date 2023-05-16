import UserProfile from "./UserProfile";

const TopWriters = () => {
  return (
    <div className="hidden lg:flex flex-col space-y-4 mt-16">
      <h1 className="text-md font-semibold">Top Writers</h1>
      <UserProfile />
      <UserProfile />
      <UserProfile />
    </div>
  );
};

export default TopWriters;