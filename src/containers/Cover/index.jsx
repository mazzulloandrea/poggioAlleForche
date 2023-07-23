import React, { useState, useEffect } from 'react';
import { Home } from '../index';
import { Wrapper, LogoStyled, MarchioStyled, LabelStyledm, IndicatorStyled } from './styled';

const Cover = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(1);
  }, []);

  useEffect(() => {
    console.log('stepChange into', stepChange);
  }, [step]);

  return (
    <div>
      <Wrapper>
        <LogoStyled />
        <MarchioStyled />
        <LabelStyledm />
        <IndicatorStyled />
      </Wrapper>
      <Home />
    </div>
  );
};

export default Cover;
