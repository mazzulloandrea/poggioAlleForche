import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout } from '..';
import { Wrapper } from '../commonStyled';
import { mobilebletWidth, tabletWidth } from '../../utils';
import { Articles } from '../../components';

const Page = () => {
  const [show, setShow] = useState(false);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  useEffect(() => {
    setShow(true);
  }, []);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isTablet: window.innerWidth < tabletWidth,
    isMobile: window.innerWidth < mobilebletWidth,
    isBigScreen,
    isPortrait,
  });

  useEffect(
    () => {
      // console.log(dimensions);
      // setDimensions({
      //   height: window.innerHeight,
      //   width: window.innerWidth,
      //   isMobile: window.innerWidth < mobilebletWidth,
      //   isTablet: window.innerWidth < tabletWidth,
      //   isBigScreen,
      //   isPortrait,
      // });
    },
    [
      // dimensions.height,
      // dimensions.width,
      // dimensions.isMobile,
      // dimensions.isTablet,
      // dimensions.isBigScreen,
      // dimensions.isPortrait,
    ],
  );

  useEffect(() => {
    const debouncedHandleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        isTablet: window.innerWidth < tabletWidth,
        isMobile: window.innerWidth < mobilebletWidth,
        isBigScreen,
        isPortrait,
      });
    };

    const changeOrientation = () => {
      setDimensions({ ...dimensions, isPortrait: !dimensions.isPortrait });
    };

    window.addEventListener('resize', debouncedHandleResize);
    window.addEventListener('orientationchange', changeOrientation);
    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.removeEventListener('orientationchange', changeOrientation);
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

export default Page;
