import React, { useEffect, useState } from 'react';
import { Layout } from '..';
import { Wrapper } from '../commonStyled';
import { mobileWidth } from '../../utils';

const Vini = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

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
    <Wrapper show={show}>
      <Layout dimensions={dimensions}></Layout>
      <article></article>
    </Wrapper>
  );
};

export default Vini;
