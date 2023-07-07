'use client';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { draftToMarkdown } from 'markdown-draft-js';
import getInputValue from './getInputValue';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import UserSession from '@/types/loggedInUser/UserSession';
import { Form, Input, Select } from 'antd';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

// {
//     "content": "string",
//     "title": "string",
//     "image": "string",
//     "tagIds": [
//       0
//     ]
//   }

const WritePage = () => {
  const [postData, setPostData] = useState();
  const { data } = useSession();
  const [markdown, setMarkdown] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleGetMarkdown = () => {
    const markdown = draftToMarkdown(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(markdown);
    setMarkdown(markdown);
    handleCreatePost();
  };

  const handleCreatePost = async () => {
    try {
      await fetch(
        `http://localhost:8080/api/v1/posts/users/${data?.user?.userId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data?.user?.accessToken,

          },
          body: JSON.stringify({
            title: postData.title,
            content: markdown,
            image: postData.img_url,
            tagIds: [postData.tag],
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
          Create a new Post
        </h1>
        <h1 className="text-center text-sm text-slate-800 mb-5">
          Make you ideas live in the world
        </h1>
        <div className="flex justify-start items-center">
          <div>
            <Form
              layout="vertical"
              onFinish={(values) => {
                setPostData(values);
                console.log(values);
                console.log("BU post Data", postData);
              }}
              style={{ minWidth: 600 }}
            >
              <Form.Item
                label="Title"
                name="title"
                required
              >
                <Input width={600} />
              </Form.Item>
              <Form.Item
                label="Image URL"
                name="img_url"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Tag"
                name="tag"
              >
                <Select style={{ width: 120 }}>
                  <Select.Option value={2}>AI</Select.Option>
                  <Select.Option value={5}>Javascript</Select.Option>
                  <Select.Option value={6}>Java</Select.Option>
                  <Select.Option value={7}>Books</Select.Option>
                  <Select.Option value={8}>News</Select.Option>
                  <Select.Option value={9}>Startups</Select.Option>
                  <Select.Option value={10}>Ukraine</Select.Option>
                  <Select.Option value={11}>Lorem</Select.Option>
                  <Select.Option value={12}>Spring</Select.Option>
                  <Select.Option value={13}>Nextjs</Select.Option>
                  <Select.Option value={14}>Game</Select.Option>
                  <Select.Option value={15}>Following</Select.Option>
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
                  Create Post
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritePage;
