"use client";
import { useState } from "react";
import { savePost, clapIcon, commentIcon } from "../../../../../public/icons/icons";
import { Modal } from "antd";
import { TextField } from "@mui/material";
import PostDTO from "@/types/Post/Post";
import PostLikeButton from "@/components/PostLikeButton";
import CommentsContainer from "@/components/CommentsContainer";

type Props = {
  post: PostDTO
}

const LikeCommentShare = ({ post }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <div className="fixed bottom-10">
          <div className="flex justify-center items-center divide-x divide-gray-300 space-x-3 py-2 px-3 rounded-3xl bg-gray-100 bg-opacity-95 hover:bg-opacity-100 border w-48">
            <PostLikeButton postId={post.postId} likeCount={post.likes?.length} />
            <div className="flex space-x-2 text-gray-500 pl-3 cursor-pointer">
              <p onClick={() => setIsModalVisible(true)}>{commentIcon}</p>
            </div>
            <div className="flex space-x-2 text-gray-500 pl-3 cursor-pointer">
              <p>{savePost}</p>
            </div>
          </div>
        </div>
      </div>
      <CommentsContainer isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} postId={post.postId} />
    </>
  );
};

export default LikeCommentShare;