import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout } from '..';

const WrapperResponsive = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <div>
      <Layout></Layout>
      {children}
    </div>
  );
};

export default WrapperResponsive;
