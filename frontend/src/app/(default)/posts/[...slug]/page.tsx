import ProfileHeader from './ProfileHeader';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import LikeCommentShare from './LikeCommentShare';
import { urlToTitle } from '@/util/urlToTitle';
import { posts } from '@/store/index';
import Avatar from '@/components/Avatar';
import FollowUserButton from '@/components/FollowUserButton';
import Image from 'next/image';
import { usernameToImage } from '@/util/usernameToImage';
import PostDTO from '@/types/Post/Post';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Params = {
  params: {
    slug: string[];
  };
};

// export function generateMetadata({ params: { slug } }: Params): Metadata {
//   return {
//     title: `${urlToTitle(slug)} | Medium`,
//     description: "Discover Ideas and Stories that Matters to You",
//   };
// }

const PostPage = async ({ params: { slug } }: Params) => {
  // const title = urlToTitle(slug);
  // const username = posts.find((post) => post.title === title)?.user.username;
  // const userimage = posts.find((post) => post.title === title)?.user.image;
  // const Content = dynamic(() => import(`@/app/(default)/contents/${slug}.mdx`), {
  //   ssr: false,
  // });

  const res = await fetch(
    `http://192.168.43.164:8080/api/v1/posts/${slug[1]}`, {
    cache: "no-cache",
  }
  ).then((res) => res.json());

  const post: PostDTO = res;

  return (
    <article>
      <div className="sm:px-5 lg:px-20 lg:flex space-x-20 my-16">
        <div className="lg:w-[65%] lg:border-r border-gray-200 lg:pr-8">
          <ProfileHeader
            username={post.user.username}
            userimage={post.user.image}
          />
          <article className="px-3 prose lg:prose-md max-w-4xl sm:px-4">
            {/* @ts-expect-error Server Component */}
            <MDXRemote source={post.content} />
          </article>
          <div>
            <LikeCommentShare />
          </div>
        </div>

        <div className="hidden lg:w-[35%] lg:fixed right-0 lg:flex flex-col px-8">
          <div className="profile flex flex-col space-y-10">
            {/* <Image src={`/images/${userimage}.jpg`} width={88} height={88} alt="profile picture" /> */}
            <Avatar
              image={post.user.image}
              username={post.user.username}
              height={88}
              width={88}
            />
            <div className="flex flex-col space-y-2">
              <h1 className="text-[16px] mt-4 font-semibold">
                {post.user.username}
              </h1>
              <p className="text-[16px] text-slate-500 text-light">
                2.2k followers
              </p>
              <p className="text-[14px] text-slate-500 text-light">
                Entrepreneur
              </p>
              <div className="flex space-x-5">
                <FollowUserButton />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-[16px] font-semibold">More from Medium</h1>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostPage;
