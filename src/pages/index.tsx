import * as i from 'types';

import { Anchor } from 'common';
import PrimeLayout from 'layouts/PrimeLayout';

const Home: i.NextPageComponent = () => {
  return (
    <p>
      Created by <Anchor to="https://labela.nl/"> LabelA</Anchor>
    </p>
  );
};

Home.layout = (page) => {
  return <PrimeLayout>{page}</PrimeLayout>;
};

export default Home;
