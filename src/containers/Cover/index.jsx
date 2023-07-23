import React, { useState, useEffect } from 'react';
import { Home } from '../index';
import { Wrapper, LogoStyled, MarchioStyled, LabelStyled, IndicatorStyled } from './styled';

const Cover = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(1);
  }, []);

  useEffect(() => {
    console.log('stepChange into', step);
  }, [step]);

  handleSlideUp = event => {
    console.log(event);
  };

  return (
    <div>
      <Wrapper>
        <LogoStyled>LOGO</LogoStyled>
        <MarchioStyled>LOGO</MarchioStyled>
        <LabelStyled>LOGO</LabelStyled>
        <IndicatorStyled onClick={handleSlideUp} />
      </Wrapper>
      <Home />
    </div>
  );
};

export default Cover;
