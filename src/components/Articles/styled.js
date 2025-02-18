import styled, { css } from 'styled-components';

import { y2019, y2019_active, y2020, y2020_active } from '../../assets/articles/prodotti';

export const Wrapper = styled.section`
  margin: 5% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Article = styled.article`
  float: left;
  width: 50%;
  height: ${props => props.height || '60vh'};
  position: relative;
  ${props =>
    props.ismobile || props.ismini
      ? css`
          width: 100%;
        `
      : css``};
  ${props =>
    props.istablet
      ? css`
          width: 100%;
        `
      : css``};
  ${props => (props.issmallscreen ? css`` : css``)};
  ${props => (props.isbigscreen ? css`` : css``)};
  ${props =>
    props.fullwidth
      ? css`
          width: 100%;
          padding: 5vh 0;
        `
      : css``};
  ${props =>
    props.full
      ? css`
          margin: 50px 0;
          width: 100vw;
          > img {
            width: 100%;
          }
        `
      : css``}
`;

export const TextWrapper = styled.div`
  padding: 5%;
  ${props =>
    props.issmallscreen
      ? props.isportrait
        ? css``
        : css`
            padding: 4%;
          `
      : css``}
  ${props => (props.ismobile ? css`` : css``)};
`;

export const TitleWrapper = styled.div`
  margin-top: -5%;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  height: 6vh;
`;

export const titleImgRules = css`
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Title = styled.div`
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${titleImgRules}
  height: 100%;
  width: 100%;
`;

export const SubTitle = styled.div`
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${titleImgRules}
  height: 6vh;
  width: 100%;
  margin: 4% 0;
`;

export const Text = styled.p`
  font-family: 'Times new roman';
  flex-wrap: wrap;
  ${props =>
    props.ismobile
      ? css`
          font-size: 1.2em;
        `
      : css``}
  ${props =>
    props.istablet
      ? css`
          font-size: 1.5em;
        `
      : css``}
  ${props =>
    props.issmallscreen
      ? props.isportrait
        ? css`
            font-size: 1.3em;
          `
        : css`
            font-size: 1.1em;
          `
      : css``}
  ${props =>
    props.ismediumscreen
      ? css`
          font-size: 1.7em;
        `
      : css``}
  ${props =>
    props.isbigscreen
      ? css`
          font-size: 1.9em;
        `
      : css``}
`;

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
    props.ismobile
      ? props.isportrait
        ? css`
            width: 100%;
            margin: 0 auto;
          `
        : css``
      : css``}
`;

export const ImgBkg = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            font-size: 1em;
          `
        : css`
            font-size: 1em;
          `
      : css``};
  ${props =>
    props.istablet
      ? css`
          font-size: 1em;
        `
      : css``};

  ${props => (props.ismobile && !props.isportrait ? css`` : css``)}
  ${props => (props.full ? css`` : css``)}
`;

export const ImgMap = styled.img`
  width: 100%;
  height: auto;
  margin: 5vh 0;
`;

export const VisitedArticle = styled.div`
  position: absolute;
  color: white;
  width: 50%;
  left: 50%;
  text-align: center;
  font-size: 1vw;
  top: 10vw;
`;

export const ImgDescription = styled.div`
  font-family: 'Times new Roman';
  position: absolute;
  padding: 0 50px;
  text-align: center;
  overflow-y: auto;
  // mobile
  top: 130px;
  height: calc(100% - 130px);

  @media screen and (orientation: landscape) {
    top: 18vw;
    height: calc(100% - 18vw);
  }

  // // tablet
  // @media screen and (min-width: 800px) {
  //   top: 160px;
  //   height: calc(100% - 160px);
  // }
  // // Desktop 1000
  // @media screen and (min-width: 1000px) {
  //   top: 195px;
  //   height: calc(100% - 195px);
  // }
  // // Desktop 1200
  // @media screen and (min-width: 1200px) {
  //   top: 230px;
  //   height: calc(100% - 230px);
  // }
  // // Desktop 1400
  // @media screen and (min-width: 1400px) {
  //   top: 260px;
  //   height: calc(100% - 260px);
  // }
  // @media screen and (max-width: 800px) {
  //   top: 155px;
  //   height: calc(100% - 155px);
  // }
  // @media screen and (max-width: 600px) {
  //   top: 155px;
  //   height: calc(100% - 155px);
  // }
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
  left: 50%;
  // width: 300px;
  // height: 50px;
  // background: red;
`;

export const YearButton = styled.img`
  src: ${y2019};
`;
