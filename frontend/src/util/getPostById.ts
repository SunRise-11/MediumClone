import PostDTO from '@/types/Post/Post';
import { posts } from '../store/index'

export const getPostById = (id: number) : PostDTO | undefined=> {
  return posts.find((post) => post.postId === id);
};
