import * as i from 'types';
import { useQueryClient } from '@tanstack/react-query';

import { useDebounceHover } from 'hooks/useDebounceHover';
import { QUERY_KEYS } from 'services/constants';

import { fetchPostDetails } from './details';

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
