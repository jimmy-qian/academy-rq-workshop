import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import api from 'services/api';
import { QUERY_KEYS } from 'services/constants';

export const fetchUserDetails = (payload: i.GetUserDetailsPayload) => {
  return api.get<i.User>({
    path: `https://jsonplaceholder.typicode.com/users/${payload.userId}`,
  });
};

export const useGetUserDetails = (payload: i.GetUserDetailsPayload) => {
  return useQuery([QUERY_KEYS.USERS, payload.userId], () => fetchUserDetails(payload));
};
