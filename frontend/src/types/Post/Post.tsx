export default interface PostDTO {
    postId: number;
    title: string;
    content: string;
    image?: string | null;
    readingTime: number;
    pinned: boolean;
    createdAt: string;
    user: {
        userId: number;
        username: string;
        email: string;
        bio?: string | null;
        image?: string | null;
    };
    likes?: {
        userId: number;
        postId: number;
    }[] | null;
    tags?: {
        tagId: number;
        name: string;
    }[] | null;
}