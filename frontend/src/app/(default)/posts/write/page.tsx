"use client";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { draftToMarkdown } from "markdown-draft-js";


const CreatePost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleCreatePost = () => {
    const contentState = editorState.getCurrentContent();
    const rawObject = convertToRaw(contentState);
    const markdownString = draftToMarkdown(rawObject);
    console.log(markdownString);
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
              Description
            </label>
            <input
              className="w-[80%] mx-auto flex justify-center items-center px-3 py-1 mb-5 focus:outline-none focus:border-green-600 border-2 border-green-400 "
              id="title"
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
            <button
              className="w-[80%] mx-auto flex justify-center
                         items-center rounded-lg bg-green-500 hover:bg-green-600 transition-transform
                          ease-in-out duration-150 delay-75  text-white font-semibold py-2 mt-5 mb-16"
              onClick={handleCreatePost}
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