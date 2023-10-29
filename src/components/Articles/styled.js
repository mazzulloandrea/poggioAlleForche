import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin: 5% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Article = styled.article`
  float: left;
  width: 50%;
  height: 60vh;
  ${props =>
    props.ismobile
      ? css`
          width: 100%;
          height: auto;
        `
      : css``};
  ${props =>
    props.istablet
      ? css`
          width: 100%;
          height: auto;
        `
      : css``};

  ${props =>
    props.fullwidth
      ? css`
          width: 100%;
          height: auto;
          padding: 5vh 0;
        `
      : css``};
  ${props =>
    props.full
      ? css`
          margin: 50px 0;
          width: 100vw;
          height: 115vh;
        `
      : css``}
`;

export const TextWrapper = styled.div`
  padding: 5%;
  ${props =>
    props.ismobile
      ? css`
          height: 60vh;
        `
      : css``};
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
      ? css`
          font-size: 1.3em;
        `
      : css``}
  ${props =>
    props.ismediumscreen
      ? css`
          font-size: 2.3em;
        `
      : css``}
  ${props =>
    props.isbigscreen
      ? css`
          font-size: 2.3em;
        `
      : css``}
`;

export const Img = styled.img``;
export const ImgBkg = styled.img`
  width: 100%;
  height: 100%;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${props =>
    props.ismobile
      ? css`
          font-size: 1em;
          height: 35vh;
        `
      : css``};
  ${props =>
    props.istablet
      ? css`
          font-size: 1em;
          height: 85vh;
        `
      : css``};

  ${props =>
    props.ismobile && !props.isportrait
      ? css`
          height: 100vh;
        `
      : css``}
  ${props =>
    props.full
      ? css`
          // background-size: contain;
        `
      : css``}
`;

export const ImgMap = styled.img`
  width: 100%;
  height: auto;
  margin: 5vh 0;
`;
