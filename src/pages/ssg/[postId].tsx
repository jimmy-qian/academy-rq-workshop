import * as i from 'types';
import { GetServerSidePropsContext, GetStaticPaths, InferGetStaticPropsType } from 'next';

import { fetchPostDetails } from 'queries/posts/details';
import GeneralLayout from 'layouts/GeneralLayout';
import { PostDetailsContainer, PostDetailsUser } from 'modules/post';

// Statically Generated Pages (SSG) do not need React Query as the data are fetchecd at build time.
const Page: i.NextPageComponent<Props, Queries> = ({ post }) => {
  return (
    <>
      <h1>Post details (SSG)</h1>
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array.from(Array(10).keys()).map((i) => ({
      params: {
        postId: (i + 1).toString(),
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
