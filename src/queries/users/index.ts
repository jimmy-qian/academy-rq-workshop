import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import api from 'services/api';

export const fetchListUsers = () => {
  return api.get<i.User[]>({
    path: 'https://jsonplaceholder.typicode.com/users',
  });
};

// @TODO: Create a query for fetching a list of users
