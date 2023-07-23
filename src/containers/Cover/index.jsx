import React, { useState, useEffect } from 'react';
import { Home } from '../index';
import { Wrapper, LogoStyled, MarchioStyled, LabelStyled, IndicatorStyled } from './styled';
import { logo, marchio, dicitura, background, arrowDown } from '../../assets';
console.log(logo, marchio, dicitura, background, arrowDown);

const Cover = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(1);
  }, []);

  useEffect(() => {
    console.log('stepChange into', step);
  }, [step]);

  const handleSlideUp = event => {
    console.log(event);
  };

  return (
    <div>
      <Wrapper src={background}>
        <LogoStyled src={logo}>LOGO</LogoStyled>
        <MarchioStyled src={marchio}>LOGO</MarchioStyled>
        <LabelStyled src={dicitura}>LOGO</LabelStyled>
        <IndicatorStyled src={arrowDown} onClick={handleSlideUp} />
      </Wrapper>
      <Home />
    </div>
  );
};

export default Cover;
