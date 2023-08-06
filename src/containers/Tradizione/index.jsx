import React, { useEffect, useState } from 'react';
import { Layout } from '..';
import { Wrapper } from '../commonStyled';
import { mobileWidth } from '../../utils';
import { Articles } from '../../components';

const Tradizione = () => {
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
    <Wrapper show={show ? 1 : 0}>
      <Layout dimensions={dimensions}>
        <Articles dimensions={dimensions} />
      </Layout>
    </Wrapper>
  );
};

export default Tradizione;
