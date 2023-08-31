import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Tradizione, COVER_SHOW, COVER_HIDE } from '..';
import {
  Wrapper,
  ContainerCentered,
  LogoStyled,
  MarchioStyled,
  LabelStyled,
  IndicatorStyled,
} from './styled';
import { tabletWidth } from '../../utils';
import { logo, marchio, dicitura, background, arrowDown as indicator } from '../../assets';

const Cover = () => {
  const [step, setStep] = useState(0);
  const [moveUp, setMoveUp] = useState(false);
  const [showCover, setShowCover] = useState(COVER_SHOW);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isTablet: window.innerWidth < tabletWidth,
    isRetina,
  });

  useEffect(() => {
    const debouncedHandleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        isTablet: window.innerWidth < tabletWidth,
        isRetina,
      });
    };

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  useEffect(() => {
    setStep(1);
  }, []);

  const setUp = useCallback(
    event => {
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

  return (
    <>
      <Wrapper
        src={background}
        showCover={showCover}
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
          isretina={isRetina}
          isbigscreen={isBigScreen}
          isdesktoporlaptop={isDesktopOrLaptop}
          istabletormobile={isTabletOrMobile}
          isportrait={isPortrait}
        >
          <LogoStyled
            className="logo"
            istablet={dimensions.isTablet ? 1 : 0}
            moveup={moveUp}
            src={logo}
            appear={isToAnimate('logo')}
            onTransitionEnd={setUp}
          />
          <MarchioStyled
            className="marchio"
            istablet={dimensions.isTablet ? 1 : 0}
            moveup={moveUp}
            src={marchio}
            appear={isToAnimate('marchio')}
            onTransitionEnd={setUp}
          />
          <LabelStyled
            className="dicitura"
            istablet={dimensions.isTablet ? 1 : 0}
            moveup={moveUp}
            src={dicitura}
            appear={isToAnimate('dicitura')}
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
              appear={isToAnimate('indicator')}
              bounce={bounce()}
              onTransitionEnd={setUp}
            />
          )}
        </ContainerCentered>
      </Wrapper>
      {showCover === COVER_HIDE && <Tradizione />}
    </>
  );
};

export default Cover;
