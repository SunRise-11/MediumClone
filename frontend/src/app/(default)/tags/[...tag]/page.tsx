"use client"
import TagHeader from '../TagHeader';
import SortPosts from '../SortPosts';
import Tags from '@/components/Tags';
import Link from 'next/link';
import Button from "@mui/material/Button"
import Container from '../container';
import TagFollowButton from '@/components/TagFollowButton';

type Params = {
  params: {
    tag: string[];
  };
};



const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const TagsPage = async ({ params }: Params) => {
  console.log("I am from Params", params.tag[1])


  const posts = await fetch(`http://localhost:8080/api/v1/tags/${params.tag[1].toString()}/posts?page=0&size=1&sort=asc`,
    { cache: "no-cache" }).then(res => res.json())



  return (
    <div className="px-5 md:px-10 lg:px-20 flex space-x-8 lg:divide-x-[1px]">
      <div className="w-full lg:w-[65%] order-first">
        <div className="flex flex-col gap-10">
          <div className="flex-col">
            <TagHeader tag={params.tag[0]} />
            <div className="flex lg:justify-start space-x-2 items-center lg:space-x-5 my-4">
              {/* @ts-expect-error Server Component */}
              <TagFollowButton tagId={params.tag[1]} />
              <Link href={"/posts/write"}>
                <Button variant="outlined" size='small' color="success">
                  Start Writing
                </Button>
              </Link>
            </div>
            <SortPosts tagId={params.tag[1]} />
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
          <Container content={posts?.content} totalElements={posts?.totalElements} />
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
