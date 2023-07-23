// import tw from 'tailwind-styled-components';
import styled, { keyframes, css } from 'styled-components';
// import CoverImg from '../../assets/header/background.png';

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
  transition: tranlateY 1.5s linear;
`;
