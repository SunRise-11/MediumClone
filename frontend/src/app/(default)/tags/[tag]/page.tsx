"use client"
import TagHeader from '../TagHeader';
import TopWriters from '../TopWriters';
import SortPosts from '../SortPosts';
import { posts as storePosts } from '../../../../store/index';
import PostList from '@/components/PostList';
import Post from '@/components/Post';
import Tags from '@/components/Tags';
import Link from 'next/link';
import Button from "@mui/material/Button"
import FollowUserButton from '@/components/FollowUserButton';

type Params = {
  params: {
    tag: string;
  };
};

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const TagsPage = ({ params }: Params) => {
  const posts = storePosts.filter((post) =>
    post.tags?.some((tag) => tag.name === capitalize(params.tag))
  );




  return (
    <div className="px-5 md:px-10 lg:px-20 flex space-x-8 lg:divide-x-[1px]">
      <div className="w-full lg:w-[65%] order-first">
        <div className="flex flex-col gap-10">
          <div className="flex-col">
            <TagHeader tag={capitalize(params.tag)} />
            <div className="flex lg:justify-start lg:space-x-2 my-4">
              <FollowUserButton />
              <Link href={"/posts/write"}>
                <Button variant="outlined" color="success">
                  Start Writing
                </Button>
              </Link>
            </div>
            <SortPosts />
          </div>
          <div>
            {posts.map((post) => (
              <Post
                key={post.postId}
                post={post}
                handleDeletePost={() => { }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-[35%] order-last  lg:top-[100px] lg:h-screen lg:sticky top-10">
        <div className="flex flex-col mt-16 lg:ml-8">
          <TopWriters />
          <div className='max-w-[350px] mt-3'>
            <Tags title='Related topics' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsPage;
