import * as i from 'types';

import {
  PostCardContainer,
  PostCardTitle,
  PostCardLink,
  PostCardAction,
  PostCardBody,
  PostCardFooter,
} from './styled';

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <PostCardContainer>
      <PostCardBody>
        <PostCardTitle>{post.title}</PostCardTitle>
        <PostCardAction>
          <PostCardLink to={`/csr/${post.id}`}>Read more(CSR)</PostCardLink>
        </PostCardAction>
      </PostCardBody>
      {/* @TODO: Add Post user details to the footer (No styling needed) */}
      <PostCardFooter>Fake user</PostCardFooter>
    </PostCardContainer>
  );
};

type PostCardProps = {
  post: i.Post;
};
