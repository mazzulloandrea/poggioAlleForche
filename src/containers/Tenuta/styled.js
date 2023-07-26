import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  opacity: 0;

  ${props =>
    props.show &&
    css`
      transition: opacity 5s;
      opacity: 1;
    `}
`;
