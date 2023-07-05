import * as i from 'types';

import { PostCardContainer, PostCardTitle, PostCardLink } from './styled';

export const PostCard = ({ post }: PostCardProps) => {
  const method = 'ssr';

  return (
    <PostCardContainer>
      <PostCardTitle>{post.title}</PostCardTitle>
      <PostCardLink to={`/${method}/${post.id}`}>Read more({method.toUpperCase()})</PostCardLink>
    </PostCardContainer>
  );
};

type PostCardProps = {
  post: i.Post;
};
