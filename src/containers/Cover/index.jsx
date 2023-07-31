import React, { useState, useEffect, useCallback } from 'react';
import { Tenuta, COVER_SHOW, COVER_HIDE } from '..';
import { Wrapper, LogoStyled, MarchioStyled, LabelStyled, IndicatorStyled } from './styled';
import { mobileWidth } from '../../utils';
import { logo, marchio, dicitura, background, arrowDown as indicator } from '../../assets';

const Cover = () => {
  const [step, setStep] = useState(0);
  const [moveUp, setMoveUp] = useState(false);
  const [showCover, setShowCover] = useState(COVER_SHOW);

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
        // moveup={moveUp}
        showCover={showCover}
        // onTransitionEnd={() => step === 5 && setShowCover(COVER_HIDE)}
        onClick={() => {
          if (isToAnimate('indicator')) {
            setMoveUp(true);
            // setShowCover(COVER_HIDE);
          }
        }}
      >
        <LogoStyled
          isMobile={dimensions.isMobile}
          moveup={moveUp}
          src={logo}
          appear={isToAnimate('logo')}
          onTransitionEnd={setUp}
        ></LogoStyled>
        <MarchioStyled
          isMobile={dimensions.isMobile}
          moveup={moveUp}
          src={marchio}
          appear={isToAnimate('marchio')}
          onTransitionEnd={setUp}
        ></MarchioStyled>
        <LabelStyled
          isMobile={dimensions.isMobile}
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
        ></LabelStyled>
        {showCover != COVER_HIDE && (
          <IndicatorStyled
            src={indicator}
            appear={isToAnimate('indicator')}
            bounce={bounce()}
            onTransitionEnd={setUp}
          />
        )}
      </Wrapper>
      {showCover === COVER_HIDE && <Tenuta />}
    </>
  );
};

export default Cover;
