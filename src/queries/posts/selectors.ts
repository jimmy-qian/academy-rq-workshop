import * as i from 'types';
import * as React from 'react';

import { useGetListUsers } from 'queries/users';

import { useGetListPosts } from '.';

export const useSelectPostsWithUsers = () => {
  const queryPosts = useGetListPosts();
  const queryUsers = useGetListUsers();

  const posts = queryPosts.data;
  const users = queryUsers.data;

  const postsWithUsers: i.PostWithUser[] =
    posts?.map((post) => {
      const user = users?.find((user) => user.id === post.userId);

      return { ...post, user };
    }) || [];

  return React.useMemo(
    () => ({
      data: postsWithUsers.sort((a, b) => a.title.localeCompare(b.title)),
      isLoading: queryPosts.isLoading || queryUsers.isLoading,
      isError: queryPosts.isError || queryUsers.isError,
    }),
    [posts, users],
  );
};
