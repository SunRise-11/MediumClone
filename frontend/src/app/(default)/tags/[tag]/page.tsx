"use client"
import TagHeader from '../TagHeader';
import TopWriters from '../TopWriters';
import SortPosts from '../SortPosts';
import { posts as storePosts } from '../../../../store/index';
import PostList from '@/components/PostList';
import Post from '@/components/Post';

type Params = {
  params: {
    tag: string;
  };
};

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const TagsPage = ({ params } : Params) => {
  const posts = storePosts.filter((post) =>
    post.tags?.some((tag) => tag.name === capitalize(params.tag))
  );

  
  

  return (
    <div className="px-5 md:px-10 lg:px-20 flex justify-between space-x-8 lg:divide-x-[1px]">
      <div className="w-full lg:w-[65%] order-first">
        <div className="flex flex-col gap-10">
          <div className="flex-col">
            <TagHeader tag={capitalize(params.tag)} />
            <div className="flex items-center space-x-4 my-4">
              <button className="border bg-green-500 text-white py-1 px-3 rounded-2xl">
                Follow
              </button>
              <button className="border border-green-500  py-1 px-3 rounded-2xl">
                Start Writing
              </button>
            </div>
            <SortPosts />
          </div>
          <div>
            {posts.map((post) => (
              <Post
                key={post.postId}
                post={post}
                handleDeletePost={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex  lg:w-[35%] order-last lg:fixed lg:top-[100px] lg:right-0 lg:h-screen">
        <div className="flex flex-col mt-16 lg:ml-8">
          <TopWriters />
        </div>
      </div>
    </div>
  );
};

export default TagsPage;
