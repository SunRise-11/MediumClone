import User from '../user/User';

export interface CommentDTO {
  id: number;
  comment: string;
  createdAt: string;
  user: User; 
}
