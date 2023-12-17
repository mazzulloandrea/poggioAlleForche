import React, { useState, useEffect, useCallback } from 'react';
import ReactGA from 'react-ga4';
import { useMediaQuery } from 'react-responsive';
import { Tradizione, COVER_SHOW, COVER_HIDE } from '..';
import {
  Wrapper,
  ContainerCentered,
  LogoStyled,
  MarchioStyled,
  LabelStyled,
  IndicatorStyled,
  UnderConstruction,
} from './styled';
import { CookieComponent } from '../../components';
import {
  bigScreen,
  mediumScreen,
  tabletWidth,
  mobileWidth,
  isScreenInPortrait,
  COOKIE_NAME,
  getCookie,
} from '../../utils';
import { logo, marchio, dicitura, background, arrowDown as indicator } from '../../assets';

const Cover = ({ staticSite, lang, setLang }) => {
  const [step, setStep] = useState(0);
  const [moveUp, setMoveUp] = useState(false);
  const [showCover, setShowCover] = useState(COVER_SHOW);
  const [cookieAcceptance, setCookieAcceptance] = useState(false);

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
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: 'Cover' });
  }, []);

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
      const isPortrait = isScreenInPortrait();
      setTimeout(() => setDimensions({ ...dimensions, isPortrait }), 400);
    };

    window.addEventListener('resize', debouncedHandleResize);
    window.addEventListener('orientationchange', changeOrientation);
    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.removeEventListener('orientationchange', changeOrientation);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setStep(1), 1500);
  }, []);

  useEffect(() => {
    setDimensions({ ...dimensions, isPortrait: isScreenInPortrait() });
  }, [dimensions.isPortrait]);

  const setUp = useCallback(
    event => {
      setStep(step + 1);
      event.stopPropagation();
    },
    [step],
  );

  const bounce = useCallback(() => {
    return step >= 4;
  }, [step]);

  const isToAnimate = type => {
    switch (type) {
      case 'logo':
        return step >= 1;
      case 'marchio':
        return step >= 2;
      case 'dicitura':
        return step >= 3;
      case 'indicator':
        return step === 4;
    }
  };

  if (staticSite) {
    return (
      <>
        <Wrapper src={background} showcover={showCover}>
          <ContainerCentered
            isbigscreen={isBigScreen ? 1 : 0}
            ismediumscreen={isMediumScreen ? 1 : 0}
            issmallscreen={isSmallScreen ? 1 : 0}
            istablet={isTablet ? 1 : 0}
            ismobile={isMobile ? 1 : 0}
            isportrait={isScreenInPortrait()}
          >
            <LogoStyled
              staticSite={staticSite}
              className="logo"
              istablet={dimensions.isTablet ? 1 : 0}
              src={logo}
            />
            <MarchioStyled
              staticSite={staticSite}
              className="marchio"
              istablet={dimensions.isTablet ? 1 : 0}
              src={marchio}
            />
            <LabelStyled
              staticSite={staticSite}
              className="dicitura"
              istablet={dimensions.isTablet ? 1 : 0}
              src={dicitura}
            />
            <UnderConstruction>Coming soon</UnderConstruction>
          </ContainerCentered>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <Wrapper
        src={background}
        showcover={showCover}
        onClick={() => {
          if (!getCookie(COOKIE_NAME)) return;
          if (isToAnimate('indicator')) {
            setMoveUp(true);
          }
        }}
      >
        <ContainerCentered
          isbigscreen={isBigScreen ? 1 : 0}
          ismediumscreen={isMediumScreen ? 1 : 0}
          issmallscreen={isSmallScreen ? 1 : 0}
          istablet={isTablet ? 1 : 0}
          ismobile={isMobile ? 1 : 0}
          isportrait={isScreenInPortrait()}
        >
          <LogoStyled
            className="logo"
            istablet={dimensions.isTablet ? 1 : 0}
            moveup={moveUp ? 1 : 0}
            src={logo}
            appear={isToAnimate('logo') ? 1 : 0}
            onTransitionEnd={setUp}
          />
          <MarchioStyled
            className="marchio"
            istablet={dimensions.isTablet ? 1 : 0}
            moveup={moveUp ? 1 : 0}
            src={marchio}
            appear={isToAnimate('marchio') ? 1 : 0}
            onTransitionEnd={setUp}
          />
          <LabelStyled
            className="dicitura"
            istablet={dimensions.isTablet ? 1 : 0}
            moveup={moveUp ? 1 : 0}
            src={dicitura}
            appear={isToAnimate('dicitura') ? 1 : 0}
            onTransitionEnd={event => {
              if (step === 5) {
                setShowCover(COVER_HIDE);
              } else {
                setUp(event);
              }
            }}
          />
          {showCover != COVER_HIDE && (
            <IndicatorStyled
              className="indicator"
              src={indicator}
              appear={isToAnimate('indicator') ? 1 : 0}
              bounce={bounce() ? 1 : 0}
              onTransitionEnd={setUp}
            />
          )}
        </ContainerCentered>
      </Wrapper>
      {showCover === COVER_HIDE && (
        <Tradizione dimensions={dimensions} lang={lang} setLang={setLang} />
      )}
      {<CookieComponent setCookie={setCookieAcceptance} />}
    </>
  );
};

export default Cover;
