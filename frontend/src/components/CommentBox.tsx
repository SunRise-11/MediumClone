import { CommentDTO } from "@/types/commentDto/CommentDto";
import React, { useState } from "react";
import Avatar from "./Avatar";
import { formatDate } from "@/util/DateFormat";

type Props = {
    comment: CommentDTO,
    deleteComment: (commentId: number) => void
}
const CommentBox = ({ comment, deleteComment }: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    const deleteHandle = async (commentId: number) => {
        setIsLoading(true)
        try {
            deleteComment(commentId);
            setIsLoading(false)
            setIsDeleted(true);
        } catch (error) {
            setIsDeleted(false)
            setIsLoading(false)
        }
    }
    return (
        <>
            <div className="bg-gray-50 rounded-2xl p-4 flex space-x-3 m-4">
                <div className="avatar flex items-start w-[20%]">
                    <Avatar userId={comment.user.userId} username={comment.user.username} image={comment.user.image} isMedium />
                </div>
                <div className="comment w-full flex justify-between">
                    <div>
                        <div className="comment-header">
                            <div className="username text-sm font-medium">{comment.user.username}</div>
                            <div className="date text-xs text-gray-500">{formatDate(comment.createdAt)}</div>
                        </div>
                        <p className="comment-body text-sm text-gray-700">
                            {comment.comment}
                        </p>
                    </div>
                    <button disabled={isLoading} onClick={() => deleteHandle(comment.id)} className="text-red-400 font-medium">{(!isLoading && !isDeleted) ? "Delete" : isDeleted && "Deleted"}</button>
                </div>

            </div>
        </>
    );
};

export default CommentBox;