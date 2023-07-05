import * as i from 'types';

import { PostOverview } from 'modules/post';

const Page: i.NextPageComponent = () => {
  return (
    <>
      <h1>Posts overview (CSR)</h1>
      <PostOverview />
    </>
  );
};

export default Page;
