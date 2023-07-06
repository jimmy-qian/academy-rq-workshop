import { useSelectPostsWithUsers } from 'queries/posts/selectors';
import { Empty, Error, Loading } from 'common';

import { PostCard } from '../PostCard';

export const PostOverview = () => {
  const queryPostsWithUsers = useSelectPostsWithUsers();

  if (queryPostsWithUsers.isLoading) {
    return <Loading />;
  }

  if (queryPostsWithUsers.isError) {
    return <Error />;
  }

  return (
    <div>
      {queryPostsWithUsers.data.length === 0 && <Empty />}
      {queryPostsWithUsers.data.length !== 0 &&
        queryPostsWithUsers.data.map((post) => <PostCard {...{ post }} key={post.id} />)}
    </div>
  );
};
