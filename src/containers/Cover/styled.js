import styled, { keyframes, css } from 'styled-components';
import { COVER_HIDE } from '../index';

const _defaultCover = styled.div`
  background: ${props => (props.src ? `url(${props.src})` : '')};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled(_defaultCover)`
  background-size: cover;
  position: absolute;
  height: 100vh;
  width: 100vw;
  transition: transform 2s;
  ${props =>
    props.moveup &&
    css`
      transform: translateY(-100vh);
    `}
  ${props =>
    props.showCover === COVER_HIDE &&
    css`
      display: none;
    `}
`;

const _defaultImg = styled(_defaultCover)`
  opacity: 0;
  transform: scale(0);
  transition: transform 3s, opacity 3s;
  ${props =>
    props.appear &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

export const LogoStyled = styled(_defaultImg)`
  ${props =>
    props.isMobile
      ? css`
          margin-bottom: -2em;
          width: 10%;
          height: 15%;
        `
      : css`
          margin-top: 10%;
          width: 10%;
          height: 15%;
        `}

  ${props =>
    props.moveup &&
    css`
      transition: transform 1s;
      transform: translateY(-100vh);
    `}
`;

export const MarchioStyled = styled(_defaultImg)`
  ${props =>
    props.isMobile
      ? css`
          width: 80%;
          height: 20%;
        `
      : css`
          width: 60%;
          height: 25%;
        `}

  ${props =>
    props.moveup &&
    css`
      transition: transform 1s;
      transition-delay: 550ms;
      transform: translateY(-100vh);
    `}
`;

export const LabelStyled = styled(_defaultImg)`
  ${props =>
    props.isMobile
      ? css`
          width: 35%;
          margin-top: -3%;
          height: 10%;
        `
      : css`
          width: 25%;
          height: 10%;
        `}

  ${props =>
    props.moveup &&
    css`
      transition: transform 1s;
      transition-delay: 350ms;
      transform: translateY(-100vh);
    `}
`;

export const IndicatorStyled = styled(_defaultImg)`
  width: 40vw;
  height: 8vw;
  // transition: transform 2s, opacity 2s;
  transition-property: transform;
  transition-duration: 2s;
  transition-timing-function: ease-out;
  transition-delay: 2s;
  ${props =>
    props.bounce &&
    css`
      animation: ${bounce} 2s linear infinite alternate;
    `}
`;

const bounce = keyframes`
from {
  transform: translateY(-2vh);
}
to {
  transform: translateY(+2vh);
}`;
