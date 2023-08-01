import styled, { css } from 'styled-components';
import { APPEARING_TIMING } from './constants';
import { background } from '../assets';

export const Wrapper = styled.div`
  // background: url(${background});
  // background-position: center;
  // background-size: contain;
  // background-repeat: no-repeat;
  opacity: 0;

  ${props =>
    props.show &&
    css`
      transition: opacity ${APPEARING_TIMING};
      opacity: 1;
    `}
`;
