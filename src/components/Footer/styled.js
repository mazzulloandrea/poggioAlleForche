import styled, { css } from 'styled-components';

export const BackgroundContainerRules = css`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FooterStyled = styled.article`
  height: 15vh;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  display: flex;
  align-items: center;
  padding: 10px 30px;
  ${props =>
    props.ismobile
      ? css`
          height: 100vh;
          flex-direction: column;
          padding-top: 30px;
          > div {
            height: 30vh;
            width: 100%;
          }
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
  > article {
    font-size: 0.8em;
  }
`;

const footerArticleTablet = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Contacts = styled(footerArticle)`
  ${props => (props.istablet ? footerArticleTablet : css``)}
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
    props.istablet
      ? css`
          margin-top: -10px;
        `
      : css``}
`;

export const Grants = styled(Contacts)`
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

export const Address = styled(footerArticle)`
  ${footerArticleTablet}
`;

export const Links = styled(footerArticle)`
  ${footerArticleTablet}
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
  margin: 10px 0;
`;

export const Underline = styled.p`
  text-decoration: underline;
  cursor: pointer;
`;
