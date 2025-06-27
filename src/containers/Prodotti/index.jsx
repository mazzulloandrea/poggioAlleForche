import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReactGA from 'react-ga4';
import { Layout } from '..';
import { Wrapper } from '../commonStyled';
import { bigScreen, mediumScreen, tabletWidth, mobileWidth, isScreenInPortrait } from '../../utils';
import { Articles } from '../../components';

const Prodotti = ({ lang, setLang }) => {
  const [show, setShow] = useState(false);

  const isBigScreen = useMediaQuery({ query: `(min-width: ${bigScreen}px)` });
  const isMediumScreen = useMediaQuery({
    query: `(min-width: ${mediumScreen}px) and (max-width: ${bigScreen}px)`,
  });
  const isSmallScreen = useMediaQuery({
    query: `(min-width: ${tabletWidth}px) and (max-width: ${mediumScreen}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${mobileWidth}px) and (max-width: ${tabletWidth}px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileWidth}px)`,
  });

  useEffect(() => {
    setShow(true);
  }, []);

  // useEffect(() => {
  //   ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: 'Prodotti' });
  // }, []);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isBigScreen,
    isMediumScreen,
    isSmallScreen,
    isTablet,
    isMobile,
    isPortrait: isScreenInPortrait(),
  });

  useEffect(() => {
    const debouncedHandleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        isBigScreen,
        isMediumScreen,
        isSmallScreen,
        isTablet,
        isMobile,
        isPortrait: isScreenInPortrait(),
      });
    };

    const changeOrientation = () => {
      const isPortrait = isScreenInPortrait(); //screen.orientation.type.includes('portrait');
      setTimeout(() => setDimensions({ ...dimensions, isPortrait }), 400);
    };

    window.addEventListener('resize', debouncedHandleResize);
    window.addEventListener('orientationchange', changeOrientation);
    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.removeEventListener('orientationchange', changeOrientation);
    };
  }, []);

  return (
    <Wrapper show={show ? 1 : 0}>
      <Layout dimensions={dimensions} lang={lang} setLang={setLang}>
        <Articles dimensions={dimensions} lang={lang} />
      </Layout>
    </Wrapper>
  );
};

export default Prodotti;
