import * as i from 'types';

import { useRouter } from 'hooks';
import { Error, Loading } from 'common';
import GeneralLayout from 'layouts/GeneralLayout';
import { PostDetailsContainer, PostDetailsUser } from 'modules/post';

// @TODO: Fill this pagew ith post details based on postId value from router
// @TODO: Handle loading and error states using <Loading /> and <Error /> components
const Page: i.NextPageComponent = () => {
  const router = useRouter<Queries>();

  const fakeUserId = '1';

  return (
    <>
      <h1>Post details (SSG)</h1>
      <PostDetailsContainer>
        {/* @TODO: Add post title here */}
        <h1>Post title</h1>
        {/* @TODO: Add post body here */}
        <p>Post body</p>
        {/* @TODY: Add post user id here */}
        <PostDetailsUser>By User#{fakeUserId}</PostDetailsUser>
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
