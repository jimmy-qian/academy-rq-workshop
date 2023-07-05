import * as i from 'types';

import GeneralLayout from 'layouts/GeneralLayout';
import { PostOverview } from 'modules/post';

const Page: i.NextPageComponent = () => {
  return (
    <>
      <h1>Posts overview (CSR)</h1>
      <PostOverview />
    </>
  );
};

Page.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default Page;
