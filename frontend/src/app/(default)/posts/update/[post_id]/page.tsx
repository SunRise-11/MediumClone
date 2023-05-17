"use client";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
} from "draft-js";
import { draftToMarkdown } from "markdown-draft-js";
import Link from "next/link";
import { useParams } from 'next/navigation';
import { getPostById } from "@/util/getPostById";
import PostDTO from "@/types/Post/Post";
import { tags } from "@/store";

const CreatePost = () => {

  const params = useParams();
  const postId : number = parseInt(params.post_id);
  const post : PostDTO | undefined = getPostById(postId);
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
  const handleCreatePost = () => {
    const contentState = editorState.getCurrentContent();
    const rawObject = convertToRaw(contentState);
    const markdownString = draftToMarkdown(rawObject);
    console.log(markdownString);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-start">
        <h1 className="text-center text-3xl font-semibold text-slate-800 mt-16">
          Edit Post
        </h1>
        <h1 className="text-center text-sm text-slate-800 mb-5">
          Make you ideas live in the world
        </h1>
        <div className="flex justify-center items-center">
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
                defaultValue={title}
              />

              <label
                className="w-[80%] flex justify-start items-center text-gray-900 text-sm font-semibold mb-2 mx-auto"
                htmlFor="desc"
              >
                Image URL
              </label>
              <input
                className="w-[80%] mx-auto flex justify-center items-center px-3 py-1 mb-5 focus:outline-none focus:border-green-600 border-2 border-green-400 "
                id="title"
                type="text"
                placeholder="url"
                defaultValue={image}
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
                defaultValue={tag}
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
              <Link 
              href="/users/Mike-Greenwood">
              <button
                className="w-[80%] mx-auto flex justify-center
                         items-center rounded-lg bg-green-500 hover:bg-green-600 transition-transform
                          ease-in-out duration-150 delay-75  text-white font-semibold py-2 mt-5 mb-16"
                onClick={handleCreatePost}
              >
                Update
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