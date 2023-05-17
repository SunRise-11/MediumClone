import ProfileHeader from "./ProfileHeader";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import LikeCommentShare from "./LikeCommentShare";
import { urlToTitle } from "@/util/urlToTitle";
import { posts } from "@/store/index"
import Avatar from "@/components/Avatar";
import FollowUserButton from "@/components/FollowUserButton";
import Image from "next/image";
import { usernameToImage } from "@/util/usernameToImage";

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Params): Metadata {
  return {
    title: `${slug} | Medium`,
    description: "Discover Ideas and Stories that Matters to You",
  };
}

const PostPage = ({ params: { slug } }: Params): JSX.Element => {
  const title = urlToTitle(slug);
  const username = posts.find((post) => post.title === title)?.user.username;
  const userimage = posts.find((post) => post.title === title)?.user.image;
  const Content = dynamic(() => import(`@/app/(default)/contents/${slug}.mdx`), {
    ssr: false,
  });
  
  

  return (
    <>
      <div className="sm:px-5 lg:px-20 lg:flex space-x-20 my-16">
        <div className="lg:w-[65%] lg:border-r border-gray-200 lg:pr-8">
          <ProfileHeader username={username} userimage={userimage} />
          <article className="px-3 prose lg:prose-md max-w-4xl sm:px-4">
            <Content />
          </article>
          <div>
            <LikeCommentShare />
          </div>
        </div>

        <div className="hidden lg:w-[35%] lg:fixed right-0 lg:flex flex-col px-8">
          <div className="profile flex flex-col space-y-10">
            {/* <Image src={`/images/${userimage}.jpg`} width={88} height={88} alt="profile picture" /> */}
            <Avatar image={`/images/${userimage}`} username={username} height={88} width={88} />
            <div className="flex flex-col space-y-2">
            <h1 className="text-[16px] mt-4 font-semibold">{username}</h1>
            <p className="text-[16px] text-slate-500 text-light">
              2.2k followers
            </p>
            <p className="text-[14px] text-slate-500 text-light">
              Entrepreneur
            </p>
            <div className="flex space-x-5">

              <FollowUserButton />
              <button className="px-4 py-2 bg-green-500 text-white rounded-3xl">
                M
              </button>
            </div>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-[16px] font-semibold">More from Medium</h1>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;