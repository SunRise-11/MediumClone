'use client';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { draftToMarkdown } from 'markdown-draft-js';
import getInputValue from './getInputValue';
import { useRouter } from 'next/router';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const CreatePost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleGetMarkdown = () => {
    const markdown = draftToMarkdown(
      convertToRaw(editorState.getCurrentContent())
    );

    const handleCreatePost = async () => {
      const res = await fetch('http://127.0.0.1:8000/create/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
        },
        body: JSON.stringify({
          // postId: 36,
          title: getInputValue('title'),
          content: markdown,
          image: getInputValue('image'),

          // readingTime: 5,
          // pinned: false,
          // createdAt: '2021-10-14T20:00:00.000Z',
          user: {
            userId: 1,
            username: 'wahala',
            email: 'wahala',
            bio: 'string',
            image: 'string',
          },
          likes: [{ userId: 1, postId: 34 }],

          tags: [
            {
              // tagId: 3,
              name: getInputValue('tag'),
            },
          ],
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.log(error));
      console.log(res);
    };
    handleCreatePost();
    useRouter().push(`/users/7`);

  };

  return (
    <>
      <div className="w-full lg:w-[65%] flex flex-col justify-start">
        <h1 className="text-center text-3xl font-semibold text-slate-800 mt-16">
          Create a new Post
        </h1>
        <h1 className="text-center text-sm text-slate-800 mb-5">
          Make you ideas live in the world
        </h1>
        <div className="flex justify-start items-center">
          <div>
            <form>
              <label
                className="w-[80%] flex justify-start items-center text-gray-900 text-sm font-semibold mb-2 mx-auto"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="w-[80%] mx-auto flex justify-center items-center px-3 py-1 mb-5 focus:outline-none focus:border-green-600 border-2 border-green-400 "
                id="title"
                type="text"
                placeholder="title"
                required
                maxLength={100}
              />
 
              <label
                className="w-[80%] flex justify-start items-center text-gray-900 text-sm font-semibold mb-2 mx-auto"
                htmlFor="desc"
              >
                Description
              </label>
              <input
                className="w-[80%] mx-auto flex justify-center items-center px-3 py-1 mb-5 focus:outline-none focus:border-green-600 border-2 border-green-400 "
                id="desc"
                type="text"
                placeholder="desc"
              />

              <label
                className="w-[80%] flex justify-start items-center text-gray-900 text-sm font-semibold mb-2 mx-auto"
                htmlFor="tag"
              >
                Tag
              </label>
              <input
                className="w-[80%] mx-auto flex justify-center items-center px-3 py-1 mb-5 focus:outline-none focus:border-green-600 border-2 border-green-400 "
                id="tag"
                type="text"
                placeholder="tag"
              />

<label
                className="w-[80%] flex justify-start items-center text-gray-900 text-sm font-semibold mb-2 mx-auto"
                htmlFor="image url"
              >
                Image URL
              </label>
              <input
                className="w-[80%] mx-auto flex justify-center items-center px-3 py-1 mb-5 focus:outline-none focus:border-green-600 border-2 border-green-400 "
                id="url"
                type="text"
                placeholder="image url(optional)"
                
              />


            </form>
            <div className="mt-16">
              <Editor
                toolbarClassName="flex sticky top-0 z-50 justify-center items-center"
                wrapperClassName="w-[80%] mx-auto my-10 shadow-lg"
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
                onClick={() => handleGetMarkdown()}
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
