import { useGetListPosts } from 'queries/posts';

import { PostCard } from '../PostCard';

export const PostOverview = () => {
  const queryPosts = useGetListPosts();

  if (queryPosts.isLoading) {
    return <p>Loading...</p>;
  }

  if (queryPosts.isError) {
    return <p>Error: Appropriate error message</p>;
  }

  return (
    <div>
      {queryPosts.data.map((post) => (
        <PostCard {...{ post }} key={post.id} />
      ))}
    </div>
  );
};
