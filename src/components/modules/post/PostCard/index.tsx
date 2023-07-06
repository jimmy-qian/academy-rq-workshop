import * as i from 'types';

import { usePrefetchPostDetails } from 'queries/posts/prefetch';

import {
  PostCardContainer,
  PostCardTitle,
  PostCardLink,
  PostCardAction,
  PostCardBody,
  PostCardFooter,
} from './styled';

export const PostCard = ({ post }: PostCardProps) => {
  // const { onHoverPrefetchPostDetails } = usePrefetchPostDetails();

  return (
    <PostCardContainer>
      <PostCardBody>
        <PostCardTitle>{post.title}</PostCardTitle>
        <PostCardAction>
          <PostCardLink
            to={`/csr/${post.id}`}
            // onMouseEnter={() => onHoverPrefetchPostDetails({ postId: post.id.toString() })}
          >
            Read more(CSR)
          </PostCardLink>
          <PostCardLink to={`/ssr/${post.id}`}>Read more(SSR)</PostCardLink>
          <PostCardLink to={`/ssg/${post.id}`}>Read more(SSG)</PostCardLink>
        </PostCardAction>
      </PostCardBody>
      <PostCardFooter>{JSON.stringify(post.user)}</PostCardFooter>
    </PostCardContainer>
  );
};

type PostCardProps = {
  post: i.PostWithUser;
};
