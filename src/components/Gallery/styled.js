import styled from 'styled-components';

const videoDim = 900;
export const PlayerContainer = styled.div`
  position: absolute;
  min-width: ${videoDim}px;
  max-width: ${videoDim}px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  // height: 400px;
  height: 700px;
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
  // z-index: 999;
`;
