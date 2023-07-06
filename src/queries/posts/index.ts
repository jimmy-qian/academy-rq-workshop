import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import api from 'services/api';

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

export const fetchListPosts_SLOW = () => {
  return new Promise<i.Post[]>((resolve) =>
    setTimeout(() => {
      resolve(
        api.get<i.Post[]>({
          path: 'https://jsonplaceholder.typicode.com/posts',
        }),
      );
    }, 2000),
  );
};

// @TODO: Create a query for fetching list of posts
