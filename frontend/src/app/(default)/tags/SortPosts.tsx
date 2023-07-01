'use client';
import { useState } from 'react';
import { Select, Space } from 'antd';
import PostDTO from '@/types/Post/Post';
import Post from '@/components/Post';
const SortPosts = ({ content }: { content: PostDTO[] }) => {
  const [trending, setTrending] = useState(false);
  const [latest, setLatest] = useState(false);
  const [best, setBest] = useState(true);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    if (value === 'Year') {
      posts = posts.filter((post) => {
        return (
          Date.parse(post.createdAt) - Date.parse(new Date().toISOString()) >
          365
        );
      });
    }
    if (value === 'Month') {
      posts = posts.filter((post) => {
        return (
          Date.parse(post.createdAt) - Date.parse(new Date().toISOString()) > 30
        );
      });
    }
    if (value === 'Week') {
      posts = posts.filter((post) => {
        return (
          Date.parse(post.createdAt) - Date.parse(new Date().toISOString()) > 7
        );
      });
    }
  };
  let posts = content;
  if (!posts) {
    return (
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900">No Posts Found</h1>
        <p className="text-gray-500 text-lg mt-4">
          Be the first one to post something
        </p>
      </div>
    );
  } 

  else {
    if (trending) {
      posts = content.sort((a, b) => {
        if (b.likes?.length && a.likes?.length) {
          return b.likes.length - a.likes.length;
        }
        return 0;
      });
    }
    else if (latest) {
      posts = content.sort((a, b) => {
        return Date.parse(b.createdAt) - Date.parse(a.createdAt);
      });
    }
    else if (best) {
      {
        posts = content.sort((a, b) => {
          if (b.likes?.length && a.likes?.length) {
            return (
              b.likes.length - a.likes.length &&
              Date.parse(b.createdAt) - Date.parse(a.createdAt)
            );
          }
          return 0;
        });
      }
    }
  
  }


  
  return (
    <>
      <div className="flex items-center space-x-2 lg:space-x-8 border-b text-gray-600 border-gray-200 mt-8">
        <p
          className={`py-4 px-2 border-gray-950 cursor-pointer ${
            trending ? 'border-b' : ''
          }`}
          onClick={() => {
            setTrending(true);
            setLatest(false);
            setBest(false);
          }}
        >
          Trending
        </p>
        <p
          className={`py-4 px-2 border-gray-950 cursor-pointer ${
            latest ? 'border-b' : ''
          }`}
          onClick={() => {
            setTrending(false);
            setLatest(true);
            setBest(false);
          }}
        >
          Latest
        </p>
        <p
          className={`py-4 px-2 border-gray-950 cursor-pointer ${
            best ? 'border-b' : ''
          }`}
          onClick={() => {
            setTrending(false);
            setLatest(false);
            setBest(true);
          }}
        >
          Best
        </p>

        {best && (
          <Space wrap>
            <Select
              defaultValue="This Year"
              style={{
                width: 120,
              }}
              bordered={false}
              onChange={handleChange}
              options={[
                {
                  value: 'Year',
                  label: 'This Year',
                },
                {
                  value: 'Month',
                  label: 'Month',
                },
                {
                  value: 'Week',
                  label: 'Week',
                },
                {
                  value: 'All Time',
                  label: 'All Time',
                },
              ]}
            />
          </Space>
        )}
      </div>
      // Sorted post should be here
      <div>
        {posts.map((post) => (
          <Post
            key={post.postId}
            post={post}
            
          />
        ))}
      </div>
    </>
  );
};

export default SortPosts;
