import React, { useEffect, useState } from 'react';
import { Layout } from '..';
import { Wrapper } from './styled';
import { mobileWidth } from '../../utils';

const Tenuta = () => {
  // if (show === TOGGLE_SHOW_COVER) return false;

  useEffect(() => {}, []);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isMobile: window.innerWidth < mobileWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        isMobile: window.innerWidth < mobileWidth,
      });
    };

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <Wrapper>
      <Layout dimensions={dimensions}></Layout>
      <article></article>
    </Wrapper>
  );
};

export default Tenuta;
