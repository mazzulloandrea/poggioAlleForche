import styled, { css } from 'styled-components';

const videoContainer = {
  bigScreen: {
    w: 1600,
    h: 900,
  },
  mediumScreen: {
    w: 1400,
    h: 750,
  },
  smallScreen: {
    w: 1050,
    h: 550,
  },
  tablet: {
    w: 750,
    h: 400,
  },
  mobile: {
    w: 500,
    h: 300,
  },
};
const videoDim = 900;

export const PlayerContainer = styled.div`
  position: absolute;
  min-width: 70%;
  max-width: 70%;
  height: 70%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  > div {
    height: 100% !important;
  }
`;

export const PlayerButton = styled.div`
  position: absolute;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  z-index: 1;
  trasform: translateZ(0) !important;
`;

export const ImageContainer = styled.img`
  height: auto;
  object-fit: cover;
  transition: transform 4s ease, filter 4s ease;
  filter: sepia(100);
  transform: scale(1);

  &:hover {
    filter: sepia(0);
    transform: scale(1.1);
  }
`;
