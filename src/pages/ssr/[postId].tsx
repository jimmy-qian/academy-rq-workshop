import * as i from 'types';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { fetchPostDetails, useGetPostDetails } from 'queries/posts';
import { serverQueryFetch } from 'services';
import { QUERY_KEYS } from 'services/constants';

// Server-side rendered pages (SSR) need React Query to fetch data on the server,
// then dynamically hydrate the data on the client, so the data is available instantly
const Page: i.NextPageComponent<Props, Queries> = ({ params }) => {
  const queryPost = useGetPostDetails({ postId: params!.postId });

  return (
    <>
      <h1>Posts overview (CSR)</h1>
      <pre>{JSON.stringify(queryPost.data)}</pre>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext<Queries>) => {
  const params = ctx.params;

  if (!params?.postId) {
    return {
      redirect: '/csr',
    };
  }

  const { state } = await serverQueryFetch([
    {
      key: [QUERY_KEYS.POSTS, params.postId],
      fetchFn: () => fetchPostDetails({ postId: params.postId }),
    },
  ]);

  return {
    props: {
      params: ctx.params,
      // Return dehydrateState to hydrate the data in _app.tsx
      dehydrateState: state,
    },
  };
};

type Queries = {
  postId: string;
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default Page;
