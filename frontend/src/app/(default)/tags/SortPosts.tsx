import { useEffect, useState } from 'react';
import { Select, Space } from 'antd';
import PostDTO from '@/types/Post/Post';
import Post from '@/components/Post';

type Props = {
  tagId: string;
}
const SortPosts = ({ tagId }: Props) => {
  const [trending, setTrending] = useState(true);
  const [latest, setLatest] = useState(false);
  const [best, setBest] = useState(false);
  const [posts, setPosts] = useState<PostDTO[]>([]);

  const getPostsByRange = async (range: string) => {
    const response = await fetch(`http://localhost:8080/api/v1/posts/filter?date=${range}`).then(response => response.json());
    setPosts(response?.content);
  };
  const getPosts = async (order: string) => {
    const response = await fetch(`http://localhost:8080/api/v1/tags/${tagId}/posts/filter?orderBy=${order}`).then(response => response.json());
    setPosts(response?.content)
  }

  const handleChange = async (value: string) => {
    console.log(`selected ${value}`);

    if (value === 'Year') {
      await getPostsByRange("year");
    } else if (value === 'Month') {
      await getPostsByRange("month");
    } else if (value === 'Week') {
      await getPostsByRange("week");
    }
  };

  useEffect(() => {
    if (trending)
      getPosts("like")
    else if (latest) getPosts("createdAt")
  }, [trending, latest])

  return (
    <>
      <div className="flex items-center space-x-2 lg:space-x-8 border-b text-gray-600 border-gray-200 mt-8">
        <p
          className={`py-4 px-2 border-gray-950 cursor-pointer ${trending ? 'border-b' : ''}`}
          onClick={() => {
            setTrending(true);
            setLatest(false);
            setBest(false);
          }}
        >
          Trending
        </p>
        <p
          className={`py-4 px-2 border-gray-950 cursor-pointer ${latest ? 'border-b' : ''}`}
          onClick={() => {
            setTrending(false);
            setLatest(true);
            setBest(false);
          }}
        >
          Latest
        </p>
        <p
          className={`py-4 px-2 border-gray-950 cursor-pointer ${best ? 'border-b' : ''}`}
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
      <div>
        {posts.map((post: PostDTO) => (
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
