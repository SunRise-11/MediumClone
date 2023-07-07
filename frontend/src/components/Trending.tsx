import Link from 'next/link';
import { trendingIcon } from '../../public/icons/icons';
import Avatar from './Avatar';
import PostDTO from '@/types/Post/Post';
import { formatDate } from '@/util/DateFormat';

type User = {
  username: string;
  image: string | null;
  postName: string;
  time: string;
};

async function Trending() {
  const { content }: { content: PostDTO[] } = await fetch(`http://localhost:8080/api/v1/posts/filter?orderBy=like`, {
    cache: "no-cache"
  }).then(res => res.json());

  return (
    <div className={'w-full h-auto pt-[2.5rem] pb-[1rem]'}>
      <div className="content w-[80%] mx-auto">
        <div
          className={'flex h-[1.9rem] leading-4 items-center mb-[1rem] flex-row'}
        >
          <p className="flex space-x-3 items-center">
            <span className="h-5">{trendingIcon}</span>
            <span className="font-semibold">Trending on Medium</span>
          </p>
        </div>
        <div className="posts grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {content?.slice(0, 6)?.map((post: PostDTO, index: number) => {
            const { title, postId, createdAt, user: { userId, username, image } } = post;
            let i = index < 10 ? '0' + (index + 1) : index;
            return (
              <div
                key={index}
                className="trending-post leading-relaxed h-auto w-full mb-[1rem] space-x-2 flex content-start"
              >
                <div className="left h-full">
                  <span className="text-4xl text-slate-300">{i}</span>
                </div>
                <div className="right flex w-full flex-col mt-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <Avatar isMedium image={`${image}`} username={username} userId={userId} width={25} height={30} />
                    <Link href={`/users/${userId}`}>
                      <p className="text-sm">{username}</p>
                    </Link>
                  </div>

                  <div className="post-name w-full text-sm md:text-base  whitespace-pre-line break-words font-semibold line-clamp-2">
                    <Link href={`/posts/${title}/${postId}`}>
                      {title}
                    </Link>
                  </div>
                  <span className="space-y-2 text-brefing text-xs font-normal">
                    {formatDate(createdAt)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Trending;
