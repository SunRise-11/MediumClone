"use client"
import Image from 'next/image';
import Link from 'next/link';
import { savePost } from '../../public/icons/icons';
import { usePathname } from 'next/navigation';
import PostMenu from './PostMenu';
import { useEffect, useState } from 'react';
import { formatDate } from '../util/DateFormat';
import PostDTO from '@/types/Post/Post';
import Avatar from './Avatar';
import { titleToUrl } from '@/util/titleToUrl';

type Props = {
  post: PostDTO;

};

const Post = ({ post, }: Props) => {
  const {
    title,
    content,
    postId,
    image: postImage,
    readingTime,
    pinned,
    createdAt,
    user,
    tags,
  } = post;
  const { username, image: userImage, userId } = user;
  const postUrl = titleToUrl(title);
  const usernameUrl = titleToUrl(user.username);

  // const [showMenu, setShowMenu] = useState<boolean>(false)
  let pin = pinned;
  // const url = usePathname();

  // useEffect(() => {
  //     const regex = /\/users\/([^/]+)/;
  //     if (url.match(regex)) {
  //         setShowMenu(true);
  //     }
  // }, [url])

  const hanldePin = () => {
    //Todo:some code here
    pin = !pinned;
  };

  return (
    <div className="flex flex-col my-16">
      {user.username == 'Abbas' && pinned ? (
        <span className="text-gray-500 text-sm">Pinned</span>
      ) : (
        ''
      )}
      <div className="flex gap-[34px] w-[100%]">
        <div className="flex flex-col gap-2 w-[70%]">
          <div className="flex items-center gap-2">
            <Avatar
              image={user.image}
              width={24}
              height={36}
              username={user.username}
              userId={user.userId}
            />
            <h1 className="text-sm font-semibold">{username}</h1>
          </div>
          <Link href={`/posts/${postUrl}/${postId}`}>
            <p className="leading-[20px] md:leading-[28px] md:text-[22px] font-bold text-slate-800 space-y-[2px] cursor-pointer">
              {title}
            </p>
          </Link>
          <p className="hidden md:block text-md text-light text-[#787878] md:!line-clamp-2 cursor-pointer">
            {content}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <p className="text-light text-[#787878] text-sm">
                {`${formatDate(createdAt)} · ${readingTime} min read ·`}
              </p>
              <span className="hidden md:flex  text-[#787878] text-sm border rounded-3xl px-2 py-[2px] bg-[#F2F3F2] cursor-pointer hover:bg-[#d9dbdb]">
                {tags != undefined && tags?.length > 0
                  ? tags[0].name
                  : 'Default'}
              </span>
            </div>

            {/* Bookmark Icon */}
            <div className="flex space-x-1">
              {savePost}
              {user.username == 'Abbas' && (
                <PostMenu
                  postId={postId}
                  username={user.username}
                  pinned={pinned}
                  hanldePin={hanldePin}

                />
              )}
            </div>
          </div>
        </div>

        <div className="w-[30%] relative">
          <Image
            src="/images/learn-turkish.jpg"
            alt="ChatGPT image"
            height={128}
            width={192}
          />
        </div>
      </div>
    </div>
  );
};
export default Post;

//
