import styled, { css } from 'styled-components';

import { y2019, y2019_active, y2020, y2020_active } from '../../assets/articles/prodotti';

export const Img = styled.img`
  position: relative;
  &#visited_cellar_id {
    position: relative;
  }
  ${props =>
    props.spaceTop
      ? css`
          padding-top: 100px;
        `
      : css``}
  ${props =>
    props.spaceTop && props.isportrait && (props.ismini || props.ismobile)
      ? css`
          padding-top: 50px;
        `
      : css``}
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            width: 100%;
            margin: 0 auto;
          `
        : css``
      : css``}
`;

export const ImgDescription = styled.div`
  font-family: 'Times new Roman';
  position: absolute;
  padding: 0 50px;
  text-align: center;
  overflow-y: auto;
  // mobile
  top: 140px;
  height: calc(100% - 140px);

  @media screen and (orientation: landscape) {
    top: 18vw;
    height: calc(100% - 18vw);
  }

  ${props =>
    (props.ismobile || props.issmallscreen) && props.isportrait
      ? css`
          top: 200px;
          height: calc(100% - 200px);
        `
      : css``}

  ${props =>
    props.text === 'right'
      ? css`
          left: 50%;
        `
      : css``}
`;

export const Multiline = styled.div`
  min-height: 10px;
`;

export const YearsButtons = styled.div`
  position: absolute;
  top: 0;
  left: 51%;
  display: flex;
  ${props =>
    props.ismobile || props.ismini
      ? props.isportrait
        ? css`
            left: 8px;
            top: 51%;
          `
        : css`
            left: 51%;
            top: 0;
          `
      : css``}
`;

export const YearButton = styled.img`
  width: 65px;
  width: 5rem;
  height: auto;
  margin-right: 5%;
  cursor: pointer;
  ${props =>
    props.ismobile || props.ismini
      ? props.isportrait
        ? css`
            width: 65px;
          `
        : css`
            width: 60px;
            height: 95%;
          `
      : css``};
  ${props =>
    props.istablet
      ? css`
          width: 80px;
        `
      : css``};
  ${props =>
    props.issmallscreen
      ? css`
          width: 125px;
        `
      : css``};
  ${props =>
    props.isbigscreen
      ? css`
          width: 200px;
        `
      : css``};
`;
