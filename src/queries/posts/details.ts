import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import api from 'services/api';

export const fetchPostDetails = (payload: i.GetPostDetailsPayload) => {
  return api.get<i.Post>({
    path: `https://jsonplaceholder.typicode.com/posts/${payload.postId}`,
  });
};

// @TODO: Create a query for fetching the detail of a specific post
