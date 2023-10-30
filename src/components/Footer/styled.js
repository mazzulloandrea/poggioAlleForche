import styled, { css } from 'styled-components';

export const BackgroundContainerRules = css`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FooterStyled = styled.footer`
  height: 15vh;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  display: flex;
  align-items: center;
  padding: 10px 30px;
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            height: 20vh;
            padding: 0;
            flex-direction: row;
          `
        : css`
            height: 30vh;
            padding: 0;
            flex-direction: row;
          `
      : css``}
  ${props =>
    props.istablet
      ? css`
          align-items: flex-start;
          > div {
            padding-top: 15px;
          }
        `
      : css``}
`;

export const footerArticle = styled.div`
  width: 20%;
  color: white;
  padding: 0 2%;
`;

const footerArticleTablet = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Address = styled(footerArticle)`
  ${footerArticleTablet}
  ${props =>
    props.ismobile
      ? css`
          display: block;
          width: 100%;
        `
      : css``}
`;

export const Address2 = styled(footerArticle)`
  ${props => (props.istablet ? footerArticleTablet : css``)}
  ${props =>
    props.ismobile
      ? css`
          display: block;
          width: 100%;
          > article {
          }
        `
      : css``}
`;

export const BackToHome = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            width: 100%;
            height: 55%;
            padding-right: 30px;
          `
        : css`
            width: 100%;
            padding: 0;
          `
      : css``}
  ${props =>
    props.istablet
      ? css`
          margin-top: -10px;
        `
      : css``}
`;

export const ContactContainer = styled(Address2)`
  width: 20%;
  text-align: center;
  ${props =>
    props.istablet
      ? css`
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        `
      : css``}
  ${props =>
    props.ismobile && props.isportrait
      ? css``
      : css`
          width: 100%;
        `}
`;

// export const LogoContainer = styled.a`
//   width: 20%;
//   height: 100%;
//   // padding: 2vh 2vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

export const Logo = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  background-size: contain;
`;

export const Marchio = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  background-size: contain;
`;

export const Links = styled(footerArticle)`
  ${footerArticleTablet}
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            width: 100%;
            height: calc(100% - 40px);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: end;
            margin-top: 20px;
          `
        : css`
            width: 100%;
            height: calc(100% - 40px);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: end;
          `
      : css``}
`;

export const MapLink = styled.article`
  ${props => (props.istablet ? footerArticleTablet : css``)};
  ${props =>
    props.istablet
      ? css`
          p {
            text-align: center;
          }
        `
      : css``}
`;

export const VideoLink = styled(MapLink)`
  margin: 5px 0;
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            margin: 0;
            margin: 3vh 0 0 0;
          `
        : css`
            margin: 0;
          `
      : css``}
`;

export const ArticleText = styled.p`
  text-align: center;
  font-family: 'Times New Roman';
  font-size: 1.1em;
  ${props =>
    props.ismobile
      ? css`
          font-size: 0.65em;
          text-align: left;
        `
      : css``}
`;

export const Underline = styled(ArticleText)`
  text-decoration: underline;
  cursor: pointer;
`;

/** MOBILE FOOTER */
export const Left = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px 15px;
  ${props =>
    props.ismobile && !props.isportrait
      ? css`
          padding: 20px;
          width: 30%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        `
      : css``}
`;

export const Right = styled(Left)`
  padding-top: 0;
  border-left: 1px solid white;
  box-sizing: border-box;
  margin: 15px 0;
  box-sizing: border-box;
  height: calc(100% - 30px);
  ${props =>
    props.ismobile && props.isportrait
      ? css``
      : css`
          padding-top: 5px;
          padding-bottom: 5px;
        `}
`;

export const Center = styled(Right)`
  width: 40%;
  padding: 0;
`;
