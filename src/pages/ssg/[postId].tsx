import * as i from 'types';
import { GetServerSidePropsContext, GetStaticPaths, InferGetStaticPropsType } from 'next';

import { fetchPostDetails } from 'queries/posts';

// Statically Generated Pages (SSG) do not need React Query as the data are fetchecd at build time.
const Page: i.NextPageComponent<Props, Queries> = ({ post }) => {
  return (
    <>
      <h1>Posts overview (SSG)</h1>
      <pre>{JSON.stringify(post)}</pre>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array.from(Array(10).keys()).map((i) => ({
      params: {
        postId: i.toString(),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async (ctx: GetServerSidePropsContext<Queries>) => {
  const params = ctx.params;

  if (!params?.postId) {
    return {
      notFound: true,
    };
  }

  const post = await fetchPostDetails({ postId: params.postId });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

type Queries = {
  postId: string;
};

export default Page;
