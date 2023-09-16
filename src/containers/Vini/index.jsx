import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout } from '..';
import { Wrapper } from '../commonStyled';
import { tabletWidth } from '../../utils';

const Vini = () => {
  const [show, setShow] = useState(false);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });

  useEffect(() => {
    setShow(true);
  }, []);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isTablet: window.innerWidth < tabletWidth,
    isMobile: window.innerWidth < mobilebletWidth,
    isBigScreen,
  });

  useEffect(() => {
    const debouncedHandleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        isTablet: window.innerWidth < tabletWidth,
        isMobile: window.innerWidth < mobilebletWidth,
        isBigScreen,
      });
    };

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <Wrapper show={show ? 1 : 0}>
      <Layout dimensions={dimensions}></Layout>
      <article></article>
    </Wrapper>
  );
};

export default Vini;
