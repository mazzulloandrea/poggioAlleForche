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
    props.istablet &&
    css`
      width: 100%;
      height: 60vh;
    `};
  ${props =>
    props.ismobile &&
    css`
      width: 100%;
      height: auto;
    `};
`;

export const TextWrapper = styled.div`
  padding: 5%;
  ${props =>
    props.ismobile &&
    css`
      height: 60vh;
    `};
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
  font-size: 1.2em;
  flex-wrap: wrap;
  ${props =>
    props.isretina &&
    css`
      font-size: 1.5em;
    `}
  ${props =>
    props.isbigscreen &&
    css`
      font-size: 1.8em;
    `}
`;

export const ImgBkg = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${props =>
    props.istablet &&
    css`
      font-size: 1em;
    `};
  ${props =>
    props.ismobile &&
    css`
      font-size: 1em;
      height: 35vh;
      // margin: -20vh 0;
      // background-size: contain;
    `};
`;
