import * as i from 'types';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { fetchPostDetails, useGetPostDetails } from 'queries/posts/details';
import { serverQueryFetch } from 'services';
import { QUERY_KEYS } from 'services/constants';
import { Error } from 'common';
import GeneralLayout from 'layouts/GeneralLayout';
import { PostDetailsContainer, PostDetailsUser } from 'modules/post/PostDetails';

// Server-side rendered pages (SSR) need React Query to fetch data on the server,
// then dynamically hydrate the data on the client, so the data is available instantly
const Page: i.NextPageComponent<Props, Queries> = ({ params }) => {
  const queryPost = useGetPostDetails({ postId: params!.postId });

  if (queryPost.isError) {
    return <Error />;
  }

  // Data must exist as the query is not loading or in error state
  const post = queryPost.data!;

  return (
    <>
      <h1>Post details (SSR)</h1>
      <PostDetailsContainer>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <PostDetailsUser>By User#{post.userId}</PostDetailsUser>
      </PostDetailsContainer>
    </>
  );
};

Page.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>;
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
