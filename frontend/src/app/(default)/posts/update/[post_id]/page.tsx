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
import { Metadata } from "next/types";
import Link from "next/link";

const CreatePost = ( { params } : { params : Metadata } ) => {

  console.log(params)
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(`Generative AI: Revolutionizing Industries
      Generative AI is an emerging technology that has the potential to revolutionize various industries. It is a type of artificial intelligence that can generate new content, such as images, videos, and text, by learning patterns from existing data. In this article, we will discuss the uses of generative AI in different fields.
      
      Healthcare
      Generative AI can be used in healthcare to generate medical images, such as X-rays and CT scans, that can help doctors diagnose diseases more accurately. This technology can also be used to create personalized treatment plans for patients based on their medical history and genetics.
      
      Entertainment
      Generative AI is used in the entertainment industry to create realistic 3D models and animations for movies and video games. This technology can also be used to generate music and sound effects for movies and other media.
      
      Marketing and Advertising
      Generative AI can be used in marketing and advertising to create personalized content for customers. For example, a clothing company can use generative AI to create custom designs for customers based on their preferences and style.
      
      Education
      Generative AI can be used in education to create interactive learning materials, such as simulations and virtual reality environments. This technology can also be used to automate grading and provide personalized feedback to students.
      
      Art
      Generative AI has been used by artists to create unique and original works of art. The technology can generate new and interesting patterns and designs that can be used as inspiration for traditional art forms.
      
      Generative AI is a powerful tool that has the potential to revolutionize various industries. As the technology continues to develop, we may see even more innovative uses of generative AI in the future.
      
      Limitations of Generative AI
      While generative AI has many potential uses and benefits, it also has some limitations that should be considered.
      
      One limitation is that generative AI can only generate content based on the data it has been trained on. This means that if the training data is biased or incomplete, the generated content will also be biased or incomplete. For example, if a generative AI system is trained on a dataset of images that primarily features white individuals, it may have difficulty accurately generating images of people of color.
      
      Another limitation of generative AI is that the output can sometimes be unpredictable or difficult to control. This is because the AI system is generating content based on patterns it has learned from the data, rather than following explicit rules or instructions. While this unpredictability can sometimes be a creative advantage, it can also be a challenge when trying to generate specific types of content.
      
      Finally, generative AI can be computationally expensive and may require significant amounts of computational power to generate content in real time. This can limit the use of generative AI in certain applications, particularly those that require low latency or high performance.
      
      Despite these limitations, the potential benefits of generative AI make it an exciting area of research and development. By addressing some of these limitations and continuing to improve the technology, we can unlock even more innovative uses for generative AI in the future.`)
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
      <div className="w-full lg:w-[65%] flex flex-col justify-start">
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
                defaultValue={"Generative AI: Revolutionizing Industries"}
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
                defaultValue={"Generative AI's potential to revolutionize industries"}
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
                defaultValue={"AI"}
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