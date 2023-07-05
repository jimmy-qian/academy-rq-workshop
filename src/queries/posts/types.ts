export type GetPostDetailsPayload = {
  postId: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
