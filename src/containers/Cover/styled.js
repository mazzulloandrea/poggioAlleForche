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
  max-width: 500px;
  max-height: 500px;
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
  width: 15vw;
  height: 15vw;
  ${props =>
    props.moveup &&
    css`
      transition: transform 1s;
      transform: translateY(-100vh);
    `}
`;

export const MarchioStyled = styled(_defaultImg)`
  width: 60vw;
  height: 20vh;
  ${props =>
    props.moveup &&
    css`
      transition: transform 1s;
      transition-delay: 550ms;
      transform: translateY(-100vh);
    `}
`;

export const LabelStyled = styled(_defaultImg)`
  width: 60vw;
  height: 10vh;
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
