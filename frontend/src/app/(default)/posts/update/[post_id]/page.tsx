'use client';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { useState } from 'react';
import { draftToMarkdown } from 'markdown-draft-js';
import { useSession } from 'next-auth/react';
import { Form, Input, Select } from 'antd';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);
import { getPostById } from "@/util/getPostById";
import {
  EditorState,
  convertToRaw,
  ContentState,
} from "draft-js";

// {
//   "content": "string",
//   "title": "string",
//   "image": "string",
//   "tagIds": [
//     0
//   ],
//   "pinned": true
// }

type Params = {
  params : {
    post_id : string
  }
}




const UpdatePost = ( {params : { post_id }} : Params ) => {
  const [postData, setPostData] = useState({});
  const { data } = useSession();
  const [markdown, setMarkdown] = useState('');
  
  const post : PostDTO | undefined = getPostById(parseInt(post_id));

  let content = ""
  let title = ""
  let tag = ""
  let image = ""
  if (post) {
    content = post.content;
    title = post.title;
    if (post.tags) {
      tag = post.tags[0].name;
  }
    if (post?.image) {
      image = post.image;
    }
  }


  
  
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(content)
    )
  );



  // 

  const handleGetMarkdown = () => {
    const markdown = draftToMarkdown(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(markdown);
    setMarkdown(markdown);
    handleUpdatePost();
  };
  
  const handleUpdatePost = async () => {
    try {
      await fetch(
        `http://192.168.43.164:8080/api/v1/posts/${post_id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data?.user?.accessToken,
            
          },
          body: JSON.stringify({
            title: postData.title,
            content: markdown,
            image: postData.img_url,
            tagIds: [postData.tag],
            pinned: false,
          }),
        }
      ).then((res) => res.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-[90%] lg:w-[65%] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-semibold text-slate-800 mt-16">
          Update Post
        </h1>
        <h1 className="text-center text-sm text-slate-800 mb-5">
          Make you ideas live in the world
        </h1>
        <div className="flex justify-start items-center">
          <div>
            <Form
              layout="vertical"
              initialValues={{title: title, img_url: image, tag: tag}}
              onFinish={(values) => {
                console.log(values);
                setPostData(values);
                console.log(postData);
              }}
              style={{ minWidth: 600 }}
            >
              <Form.Item
                label="Title"
                name="title"
                
                required
              >
                <Input width={600}
                />
              </Form.Item>
              <Form.Item
                label="Image URL"
                name="img_url"
              >
                <Input  
                 />
              </Form.Item>
              <Form.Item
                label="Tag"
                name="tag"
              >
                <Select style={{ width: 120 }}>
                  <Select.Option value={10}>Tech</Select.Option>
                  <Select.Option value={9}>Lifestyle</Select.Option>
                  <Select.Option value={8}>Travel</Select.Option>
                  <Select.Option value={7}>Health</Select.Option>
                  <Select.Option value={12}>Finance</Select.Option>
                  <Select.Option value={13}>Self-improvement</Select.Option>
                </Select>
              </Form.Item>
            

              <div className="mt-16">
                <Editor
                  toolbarClassName="flex sticky top-0 z-50 justify-center items-center"
                  wrapperClassName="w-[95%] mx-auto my-10 shadow-lg"
                  editorClassName="px-5 min-h-[300px]"
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                />
              </div>
              <div>
                <button
                  className="w-[80%] mx-auto flex justify-center
                         items-center rounded-lg bg-green-500 hover:bg-green-600 transition-transform
                          ease-in-out duration-150 delay-75  text-white font-semibold py-2 mt-5 mb-16"
                          onClick={handleGetMarkdown}
                          type='submit'
                >
                  Update Post
                </button>
              </div>
            </Form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;