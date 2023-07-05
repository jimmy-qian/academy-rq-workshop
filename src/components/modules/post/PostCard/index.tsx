import * as i from 'types';

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

type PostCardProps = {
  post: i.Post;
};
