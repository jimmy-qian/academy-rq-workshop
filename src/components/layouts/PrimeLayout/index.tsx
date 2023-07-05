import * as React from 'react';
import Image from 'next/image';

import { Anchor } from 'common';

import { GithubLink, PrimeContent } from './styled';

const userId = '3783ce59-0e59-4a77-aaaf-e824f7c5e8f1';

const PrimeLayout: React.FC<PrimeLayoutProps> = ({ children }) => {
  const [randomNum, setRandomNum] = React.useState<number | null>(null);

  React.useEffect(() => {
    setRandomNum(Math.floor(Math.random() * 1000));
    console.info('Layout Mounted!');
  }, []);

  return <></>;
};

type PrimeLayoutProps = {
  children: React.ReactNode;
};

export default PrimeLayout;
