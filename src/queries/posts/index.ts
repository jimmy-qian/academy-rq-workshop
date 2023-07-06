import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import api from 'services/api';
import { QUERY_KEYS } from 'services/constants';

export const fetchListPosts_SUCCESS = () => {
  return api.get<i.Post[]>({
    path: 'https://jsonplaceholder.typicode.com/posts',
  });
};

export const fetchListPosts_ERROR = () => {
  return api
    .get<i.Post[]>({
      path: 'https://jsonplaceholder.typicode.com/posts',
    })
    .then(() => {
      throw new Error('Internal server error');
    });
};

export const fetchListPosts_EMPTY = () => {
  return api
    .get<i.Post[]>({
      path: 'https://jsonplaceholder.typicode.com/posts',
    })
    .then(() => [] as i.Post[]);
};

export const useGetListPosts = () => {
  return useQuery([QUERY_KEYS.POSTS], fetchListPosts_SUCCESS, {
    select: (data) =>
      data.map((post) => ({
        ...post,
        title: `${post.title.slice(0, 1).toUpperCase()}${post.title.slice(1)}`,
      })),
  });
};
