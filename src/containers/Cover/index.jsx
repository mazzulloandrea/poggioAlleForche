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

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isTablet: window.innerWidth < tabletWidth,
    isBigScreen,
    isPortrait,
  });

  useEffect(() => {
    const debouncedHandleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        isTablet: window.innerWidth < tabletWidth,
        isBigScreen,
        isPortrait,
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
      // debugger;
      console.log('setUp actual step', step);
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
    // debugger;
    console.log(`isToAnimate  type:${type},  step:${step}`);
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
          isdesktoporlaptop={isDesktopOrLaptop ? 1 : 0}
          istabletormobile={isTabletOrMobile ? 1 : 0}
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
              // debugger;
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
      {showCover === COVER_HIDE && <Tradizione />}
    </>
  );
};

export default Cover;
