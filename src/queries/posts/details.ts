import * as i from 'types';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { useDebounceHover } from 'hooks/useDebounceHover';
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

export const usePrefetchPostDetails = () => {
  const queryClient = useQueryClient();

  const onPrefetch = (payload: i.GetPostDetailsPayload) => {
    queryClient.prefetchQuery([QUERY_KEYS.POSTS, payload.postId], () => fetchPostDetails(payload));
  };

  const onHoverPrefetch = useDebounceHover<i.GetPostDetailsPayload>(onPrefetch);

  return {
    onPrefetchPostDetails: onPrefetch,
    onHoverPrefetchPostDetails: onHoverPrefetch,
  };
};
