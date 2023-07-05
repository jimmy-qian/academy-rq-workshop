import { useGetListPosts } from 'queries/posts';
import { Empty, Error, Loading } from 'common';

import { PostCard } from '../PostCard';

export const PostOverview = () => {
  const queryPosts = useGetListPosts();

  if (queryPosts.isLoading) {
    return <Loading />;
  }

  if (queryPosts.isError) {
    return <Error />;
  }

  return (
    <div>
      {queryPosts.data.length === 0 && <Empty />}
      {queryPosts.data.length !== 0 &&
        queryPosts.data.map((post) => <PostCard {...{ post }} key={post.id} />)}
    </div>
  );
};
