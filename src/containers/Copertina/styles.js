import tw from 'tailwind-styled-components';
import styled, { keyframes, css } from 'styled-components';
import CoverImg from '../../assets/header/background.png';

const moveUp = keyframes`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(-100vh)
  }
`;

export const MainContainer = styled.div`
  animation: ${props => props.moveUp && moveUp} 1s linear;
  animation-delay: 1s
  transition: tranlateY 1.5s linear;
`;

export const CopertinaBck = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(${CoverImg});
  background-size: cover;
  ${props =>
    props.isVisible &&
    css`
      display: none;
      // visibility: hidden;
      // transform: translateY(-100vh);
    `}
`;

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  overflow: 'hidden',
});

const fadeIn = keyframes`
  from {
    transform: scale(0.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Logo = styled.img`
  width: 10%;
  height: auto;
  display: inline-block;
  animation: ${props => props.in && fadeIn} 1.5s linear;
  transition: visibility 1s linear;
`;

export const Marchio = styled.img`
  width: 60%;
  height: auto;
  display: inline-block;
  visibility: ${props => (props.in ? 'visible' : 'hidden')};
  animation: ${props => props.in && fadeIn} 1.5s linear;
  transition: visibility 1s linear;
`;

export const Dicitura = styled.img`
  width: 30%;
  height: auto;
  display: inline-block;
  visibility: ${props => (props.in ? 'visible' : 'hidden')};
  animation: ${props => props.in && fadeIn} 1.5s linear;
  transition: visibility 1s linear;
`;

const upDown = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(25px);
  }
`;

export const Arrow = styled.img`
  width: 15%;
  min-width: 50px;
  max-width: 150px;
  height: auto;
  display: inline-block;
  visibility: ${props => (props.in ? 'visible' : 'hidden')};
  animation: ${props => props.in && upDown} 1.5s linear infinite alternate;
  position: absolute;
  bottom: 25px;
`;
