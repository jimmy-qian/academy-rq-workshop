import * as React from 'react';

import { GeneralLayoutContainer } from './styled';

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return <GeneralLayoutContainer>{children}</GeneralLayoutContainer>;
};

type GeneralLayoutProps = {
  children: React.ReactNode;
};

export default GeneralLayout;
