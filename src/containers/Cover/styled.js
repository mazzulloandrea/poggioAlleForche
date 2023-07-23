import styled, { keyframes, css } from 'styled-components';

const moveUp = keyframes``;

const _defaultImg = styled.div`
  background: ${props => (props.src ? `url(${props.src})` : '')};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const desktopDimension = css`
  width: 40vw;
  max-width: 40vw;
  height: auto;
  max-height: 20vh;
`;
const mobileDimension = css`
  width: 60vw;
  max-width: 90vw;
  height: auto;
  max-height: 40vh;
`;
const _defaultLogo = styled(_defaultImg)`
  max-width: 500px;
  max-height: 500px;
  ${props => (props.isDesktop() ? desktopDimension : mobileDimension)}
`;

export const Wrapper = styled(_defaultImg)`
  name: cover;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: lightblue;
  // background: ${props => (props.src ? `url(${props.src})` : '')};
`;

export const LogoStyled = styled(_defaultLogo)``;

export const MarchioStyled = styled(_defaultLogo)``;

export const LabelStyled = styled(_defaultLogo)``;

export const IndicatorStyled = styled(_defaultLogo)``;
