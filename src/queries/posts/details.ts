import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import api from 'services/api';
import { QUERY_KEYS } from 'services/constants';

export const fetchPostDetails = (payload: i.GetPostDetailsPayload) => {
  return api.get<i.Post>({
    path: `https://jsonplaceholder.typicode.com/posts/${payload.postId}`,
  });
};

export const useGetPostDetails = (payload: i.GetPostDetailsPayload) => {
  return useQuery([QUERY_KEYS.POSTS, payload.postId], () => fetchPostDetails(payload), {
    enabled: !!payload.postId,
  });
};
