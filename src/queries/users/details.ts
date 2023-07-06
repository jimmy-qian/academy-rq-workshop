import * as i from 'types';
import { useQuery } from '@tanstack/react-query';

import api from 'services/api';

export const fetchUserDetails = (payload: i.GetUserDetailsPayload) => {
  return api.get<i.User>({
    path: `https://jsonplaceholder.typicode.com/users/${payload.userId}`,
  });
};

// @TODO: Create a query for fetching the detail of a specific user
