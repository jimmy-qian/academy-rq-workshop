import * as i from 'types';

import { useRouter } from 'hooks';
import { useGetPostDetails } from 'queries/posts/details';
import { Error, Loading } from 'common';
import GeneralLayout from 'layouts/GeneralLayout';
import { PostDetailsContainer, PostDetailsUser } from 'modules/post';

// Client-side render (CSR) pages fetch data on run-time, which allows us to handle
// errors and loading states to provide more information to the user
const Page: i.NextPageComponent = () => {
  const router = useRouter<Queries>();
  const queryPost = useGetPostDetails({ postId: router.query.postId });

  if (queryPost.isLoading) {
    return <Loading />;
  }

  if (queryPost.isError) {
    return <Error />;
  }

  return (
    <>
      <h1>Post details (SSG)</h1>
      <PostDetailsContainer>
        <h1>{queryPost.data.title}</h1>
        <p>{queryPost.data.body}</p>
        <PostDetailsUser>By User#{queryPost.data.userId}</PostDetailsUser>
      </PostDetailsContainer>
    </>
  );
};

Page.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default Page;

type Queries = {
  postId: string;
};
