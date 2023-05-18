"use client";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import Link from "antd/es/typography/Link";
// import { draftToMarkdown } from "markdown-draft-js";


const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)



const CreatePost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  
  return (
    <>
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl font-semibold text-slate-800 mt-16">
        Create a new Post
      </h1>
      <h1 className="text-center text-sm text-slate-800 mb-5">
        Make you ideas live in the world
      </h1>
      <div className="flex justify-start items-center">
        <div >
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
            />

            <label
              className="w-[80%] flex justify-start items-center text-gray-900 text-sm font-semibold mb-2 mx-auto"
              htmlFor="desc"
            >
              Image Url
            </label>
            <input
              className="w-[80%] mx-auto flex justify-center items-center px-3 py-1 mb-5 focus:outline-none focus:border-green-600 border-2 border-green-400 "
              id="title"
              type="text"
              placeholder="url"
            />

            <label
              className="w-[80%] flex justify-start items-center text-gray-900 text-sm font-semibold mb-2 mx-auto"
              htmlFor="tag"
            >
              Tag
            </label>
            <input
              className="w-[80%] mx-auto flex justify-center items-center px-3 py-1 mb-5 focus:outline-none focus:border-green-600 border-2 border-green-400 "
              id="title"
              type="text"
              placeholder="tag"
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
            <Link href="/users/paul-graham">
            <button
              className="w-[80%] mx-auto flex justify-center
                         items-center rounded-lg bg-green-500 hover:bg-green-600 transition-transform
                          ease-in-out duration-150 delay-75  text-white font-semibold py-2 mt-5 mb-16"
            >
              Create Post
            </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CreatePost;