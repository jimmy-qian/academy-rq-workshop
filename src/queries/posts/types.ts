import * as i from 'types';

export type GetPostDetailsPayload = {
  postId: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostWithUser = Post & {
  user: i.User | undefined;
};
