"use client";
import { useState } from "react";
import { savePost, clapIcon, commentIcon } from "../../../../../public/icons/icons";
import { Modal } from "antd";
import { TextField } from "@mui/material";

const LikeCommentShare = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <div className="fixed bottom-10">
          <div className="flex justify-center items-center divide-x divide-gray-300 space-x-3 py-2 px-3 rounded-3xl bg-gray-100 bg-opacity-95 hover:bg-opacity-100 border w-48">
            <div className="flex space-x-2 text-gray-500">
              <p className="cursor-pointer">{clapIcon}</p>
              <p className="">4</p>
            </div>
            <div className="flex space-x-2 text-gray-500 pl-3 cursor-pointer">
              <p onClick={() => setIsModalVisible(true)}>{commentIcon}</p>
            </div>
            <div className="flex space-x-2 text-gray-500 pl-3 cursor-pointer">
              <p>{savePost}</p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Comments"
        open={isModalVisible}
        footer={null}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        className="fixed right-0 top-0"
        style={{ borderRadius: 0 }}
      >
        <div className="flex flex-col space-y-8 min-h-screen">
          <div className="flex justify-center write-comment mt-16">
            <TextField
              id="filled-textarea"
              label="Write comment"
              placeholder="Your comment here"
              multiline
              variant="filled"
              rows={3}
              className="w-full"
              color="success"
            />
          </div>
          <div>
            <button className="px-4 py-2 bg-green-500 text-white rounded-3xl">
                Post
            </button>
          </div>
          <div>
            <p className="text-center text-3xl text-gray-700">No comments yet...</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LikeCommentShare;