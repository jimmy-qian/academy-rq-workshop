import * as i from 'types';

import { PostCardContainer, PostCardTitle, PostCardLink, PostCardAction } from './styled';

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <PostCardContainer>
      <PostCardTitle>{post.title}</PostCardTitle>
      <PostCardAction>
        <PostCardLink to={`/csr/${post.id}`}>Read more(CSR)</PostCardLink>
        <PostCardLink to={`/ssr/${post.id}`}>Read more(SSR)</PostCardLink>
        <PostCardLink to={`/ssg/${post.id}`}>Read more(SSG)</PostCardLink>
      </PostCardAction>
    </PostCardContainer>
  );
};

type PostCardProps = {
  post: i.Post;
};
