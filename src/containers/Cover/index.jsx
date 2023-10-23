import React, { useState, useEffect, useCallback } from 'react';
import ReactGA from 'react-ga';
import { useMediaQuery } from 'react-responsive';
import CookieConsent from 'react-cookie-consent';
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
import { bigScreen, mediumScreen, tabletWidth, mobilebletWidth } from '../../utils';
import { logo, marchio, dicitura, background, arrowDown as indicator } from '../../assets';

const Cover = ({ staticSite }) => {
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
    query: `(min-width: ${mobilebletWidth}px) and (max-width: ${tabletWidth}px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${mobilebletWidth}px)`,
  });

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isBigScreen,
    isMediumScreen,
    isSmallScreen,
    isTablet,
    isMobile,
    isPortrait,
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + '_cover');
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
  }, []); // TODO definire eventuali dipendenze

  useEffect(() => {
    setTimeout(() => setStep(1), 1500);
  }, []);

  // WORKAROUND use to force launch animation after 5 seconds
  // useEffect(() => {
  //   console.log('actual step', step);
  //   setTimeout(() => {
  //     if (step === 0) {
  //       setStep(4);
  //     }
  //   }, 5000);
  // }, [step]);

  useEffect(() => {
    console.log(dimensions.isPortrait ? 'portrait' : 'landscap');
  }, [dimensions.isPortrait]);

  const setUp = useCallback(
    event => {
      // console.log('setUp actual step', step);
      setStep(step + 1);
      event.stopPropagation();
      // console.log(step);
    },
    [step],
  );

  const bounce = useCallback(() => {
    return step >= 4;
  }, [step]);

  const isToAnimate = type => {
    // console.log(`isToAnimate  type:${type},  step:${step}`);
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
            isportrait={isPortrait ? 1 : 0}
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
          if (isToAnimate('indicator')) {
            setMoveUp(true);
            // setShowCover(COVER_HIDE);
          }
        }}

        // moveup={moveUp}
        // onTransitionEnd={() => step === 5 && setShowCover(COVER_HIDE)}
      >
        <ContainerCentered
          isbigscreen={isBigScreen ? 1 : 0}
          ismediumscreen={isMediumScreen ? 1 : 0}
          issmallscreen={isSmallScreen ? 1 : 0}
          istablet={isTablet ? 1 : 0}
          ismobile={isMobile ? 1 : 0}
          // isdesktoporlaptop={isDesktopOrLaptop ? 1 : 0}
          // istabletormobile={isTabletOrMobile ? 1 : 0}
          isportrait={isPortrait ? 1 : 0}
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
      {showCover === COVER_HIDE && <Tradizione dimensions={dimensions} />}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={1}
        onAccept={acceptedByScrolling => {
          setCookieAcceptance(true);
        }}
      >
        This website uses cookies to enhance the user experience.{' '}
        {/* <span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span> */}
      </CookieConsent>
    </>
  );
};

export default Cover;
