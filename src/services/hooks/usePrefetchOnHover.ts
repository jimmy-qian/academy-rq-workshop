import { useQueryClient } from '@tanstack/react-query';

export const usePrefetchOnHover = async <TData>(
  queryKey: any[],
  queryFn: (...args: any) => TData,
) => {
  const queryClient = useQueryClient();

  return await queryClient.prefetchQuery(queryKey, queryFn);
};
