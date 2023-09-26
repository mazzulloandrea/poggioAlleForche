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
  // padding: 2% 4%;
  padding: 10px 30px;
  ${props =>
    props.ismobile &&
    css`
      height: 90vh;
      flex-direction: column;
      > div {
        height: 30vh;
        width: 100%;
      }
    `}
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
  ${props => props.istablet && footerArticleTablet}
`;

export const BackToHome = styled.div`
  width: 20%;
  height: 100%;
  // padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Grants = styled(Contacts)`
  width: 20%;
  text-align: center;
  ${props =>
    props.istablet &&
    css`
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      // text-align: center;
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

export const Address = styled(footerArticle)`
  ${props => props.istablet && footerArticleTablet}
`;
export const MapLink = styled(footerArticle)`
  ${props => props.istablet && footerArticleTablet}
`;
