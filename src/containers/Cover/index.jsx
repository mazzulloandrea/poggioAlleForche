import React, { useState, useEffect, useCallback } from 'react';
import { Home } from '../index';
import { Wrapper, LogoStyled, MarchioStyled, LabelStyled, IndicatorStyled } from './styled';
import { logo, marchio, dicitura, background, arrowDown as indicator } from '../../assets';
console.log(logo, marchio, dicitura, background, indicator);

const Cover = () => {
  const [step, setStep] = useState(0);
  const [moveUp, setMoveUp] = useState(false);
  const [showHomepage, setShowHomepage] = useState(false);

  useEffect(() => {
    setStep(1);
  }, []);

  // useEffect(() => {
  //   console.log('stepChange into', step);
  //   if (step === 10) {
  //     setMoveUp(true);
  //   }
  // }, [step]);

  const setUp = useCallback(
    event => {
      setStep(step + 1);
      event.stopPropagation();
      console.log(step);
    },
    [step],
  );

  const bounce = useCallback(() => {
    return step >= 4;
  }, [step]);

  // const handleSlideUp = event => {
  //   // console.log(event);
  //   setStep(5);
  // };

  const isToAnimate = type => {
    switch (type) {
      case 'logo':
        return step >= 1;
      case 'marchio':
        return step >= 2;
      case 'dicitura':
        return step >= 3;
      case 'indicator':
        return step >= 4;
    }
  };

  return (
    <div>
      <Wrapper
        src={background}
        moveup={moveUp}
        showHomepage={showHomepage}
        onTransitionEnd={() => step === 5 && setShowHomepage(true)}
        onClick={() => isToAnimate('indicator') && setMoveUp(true)}
      >
        <LogoStyled src={logo} appear={isToAnimate('logo')} onTransitionEnd={setUp}></LogoStyled>
        <MarchioStyled
          src={marchio}
          appear={isToAnimate('marchio')}
          onTransitionEnd={setUp}
        ></MarchioStyled>
        <LabelStyled
          src={dicitura}
          appear={isToAnimate('dicitura')}
          onTransitionEnd={setUp}
        ></LabelStyled>
        <IndicatorStyled
          src={indicator}
          appear={isToAnimate('indicator')}
          bounce={bounce()}
          onTransitionEnd={setUp}
        />
      </Wrapper>
      <Home show={showHomepage} />
    </div>
  );
};

export default Cover;
