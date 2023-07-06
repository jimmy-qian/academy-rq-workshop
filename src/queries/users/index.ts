import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import api from 'services/api';
import { QUERY_KEYS } from 'services/constants';

export const fetchListUsers = () => {
  return api.get<i.User[]>({
    path: 'https://jsonplaceholder.typicode.com/users',
  });
};

export const useGetListUsers = () => {
  return useQuery([QUERY_KEYS.USERS], fetchListUsers);
};
