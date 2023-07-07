import ProfileHeader from './ProfileHeader';
import LikeCommentShare from './LikeCommentShare';
import Avatar from '@/components/Avatar';
import FollowButton from '@/components/FollowButton';
import PostDTO from '@/types/Post/Post';
import { MDXRemote } from 'next-mdx-remote/rsc';
import User from '@/types/user/User';

type Params = {
  params: {
    slug: string[];
  };
};


const PostPage = async ({ params: { slug } }: Params) => {


  const res = await fetch(
    `http://localhost:8080/api/v1/posts/${slug[1]}`, {
    cache: "no-cache",
  }
  ).then((res) => res.json());

  const post: PostDTO = res;

  const followed: User[] = await fetch(`http://localhost:8080/api/v1/followers/${post?.user?.userId}`).then((res) => res.json());

  return (
    <article>
      <div className="sm:px-5 lg:px-20 lg:flex space-x-20 my-16">
        <div className="lg:w-[65%] lg:border-r border-gray-200 lg:pr-8">
          <ProfileHeader
            userId={post.user?.userId}
            username={post.user?.username}
            userimage={post.user?.image}
            date={post?.createdAt}
            readingTime={post.readingTime}
          />
          <article className="px-3 prose lg:prose-md max-w-4xl sm:px-4">
            {/* @ts-expect-error Server Component */}
            <MDXRemote source={post.content} />
          </article>
          <div>
            <LikeCommentShare post={post} />
          </div>
        </div>

        <div className="hidden lg:w-[35%] lg:fixed right-0 lg:flex flex-col px-8">
          <div className="profile flex flex-col space-y-10">
            {/* <Image src={`/images/${userimage}.jpg`} width={88} height={88} alt="profile picture" /> */}
            <Avatar
              userId={post.user?.userId}
              image={post.user?.image}
              username={post.user?.username}
              height={88}
              width={88}
            />
            <div className="flex flex-col space-y-2">
              <h1 className="text-[16px] mt-4 font-semibold">
                {post.user?.username}
              </h1>
              <p className="text-[16px] text-slate-500 text-light">
                {`${followed.length} followers`}
              </p>
              <p className="text-[14px] text-slate-500 text-light">
                {post?.user?.bio}
              </p>
              <div className="flex space-x-5">
                <FollowButton userId={post.user?.userId} />
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
