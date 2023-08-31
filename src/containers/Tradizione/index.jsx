import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout } from '..';
import { Wrapper } from '../commonStyled';
import { mobilebletWidth, tabletWidth } from '../../utils';
import { Articles } from '../../components';

const Tradizione = () => {
  const [show, setShow] = useState(false);
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  useEffect(() => {
    setShow(true);
  }, []);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isTablet: window.innerWidth < tabletWidth,
    isMobile: window.innerWidth < mobilebletWidth,
    isRetina,
  });

  useEffect(() => {
    // console.log(dimensions);
  }, [dimensions]);

  useEffect(() => {
    const debouncedHandleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        isTablet: window.innerWidth < tabletWidth,
        isMobile: window.innerWidth < mobilebletWidth,
        isRetina,
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
