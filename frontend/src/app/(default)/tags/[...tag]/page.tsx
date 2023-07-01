"use client"
import TagHeader from '../TagHeader';
import TopWriters from '../TopWriters';
import SortPosts from '../SortPosts';
import { posts as storePosts } from '../../../../store/index';
import Post from '@/components/Post';
import Tags from '@/components/Tags';
import Link from 'next/link';
import Button from "@mui/material/Button"
import FollowUserButton from '@/components/FollowUserButton';
import TagWriters from '@/components/TagWriters';

type Params = {
  params: {
    tag: string[];
  };
};



const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};




const TagsPage = async ({ params }: Params) => {
  // const posts = storePosts.filter((post) =>
  //   post.tags?.some((tag) => tag.name === capitalize(params.tag))
  // );
  console.log("I am from Params", params.tag[1])

   
  const { content } = await fetch(`http://192.168.43.164:8080/api/v1/tags/${params.tag[1].toString()}/posts?page=0&size=1&sort=asc`, {cache: "no-cache"}).then(res => res.json()) 
  // const content = [{
  //   postId: 1,
  //   title: '5 Javascript Clean Coding Patterns To Enhance Your Code',
  //   content: `
  //   Introduction

    
  //   Well-documented code is essential for clean coding practices. Comments help explain the intent, purpose, and functionality of code blocks. Use comments to clarify complex algorithms, provide insights into decision-making processes, or document any assumptions or limitations. However, it's important to strike a balance with comments. Avoid excessive or redundant comments that merely restate the code. Focus on adding value by providing context and explaining the reasoning behind the implementation choices.
  //   `,

  //   image: '/images/5-Javascript-Clean-Coding-Patterns-To-Enhance-Your-Code.png',
  //   readingTime: 2,
  //   pinned: true,
  //   createdAt: '2023-08-20T13:20:10.633Z',
  //   user: {
  //     userId: 2,
  //     username: 'Abbas Abdelila',
  //     email: 'email.com1',
  //     bio: 'SDU',
  //     image: 'Abbas-Abdelila.jpg',
  //   },
  //   likes: [
  //     {
  //       userId: 2,
  //       postId: 1,
  //     },
  //   ],
  //   tags: [
  //     {
  //       tagId: 1,
  //       name: 'Programming',
  //     },
  //   ],
  // },]


  return (
    <div className="px-5 md:px-10 lg:px-20 flex space-x-8 lg:divide-x-[1px]">
      <div className="w-full lg:w-[65%] order-first">
        <div className="flex flex-col gap-10">
          <div className="flex-col">
            <TagHeader tag={params.tag[0]} />
            <div className="flex lg:justify-start space-x-2 items-center lg:space-x-5 my-4">
              <FollowUserButton />
              <Link href={"/posts/write"}>
                <Button variant="outlined" size='small' color="success">
                  Start Writing
                </Button>
              </Link>
            </div>
            <SortPosts content={content} />
          </div>

          {/* Sorting posts according to latest, popular, time should be inside SortPosts */}

          {/* <div>
            {posts.map((post) => (
              <Post
                key={post.postId}
                post={post}
                handleDeletePost={() => { }}
              />
            ))}
          </div> */}
        </div>
      </div>
      <div className="hidden lg:flex lg:w-[35%] order-last  lg:top-[100px] lg:h-screen lg:sticky top-10">
        <div className="flex flex-col mt-16 lg:ml-8">
          <TagWriters tag={{
            name: params.tag[1]
          }} />
          <TopWriters />
          <div className='max-w-[350px] mt-3'>
            {/* @ts-expect-error Server Component */}
            <Tags title='Related topics' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsPage;
