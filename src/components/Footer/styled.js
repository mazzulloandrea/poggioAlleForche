import styled, { css } from 'styled-components';

export const BackgroundContainerRules = css`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FooterStyled = styled.article`
  height: 30vh;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  display: flex;
  align-items: center;
  padding: 2% 4%;
  ${props =>
    props.istablet &&
    css`
      height: 90vh;
      flex-direction: column;
      // align-items: center;
      > div {
        height: 30vh;
        width: 100%;
      }
    `}
`;

export const Contacts = styled.div`
  width: 40%;
  width: 40%;
  color: white;
  padding: 0 2%;
  ${props =>
    props.istablet &&
    css`
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      // text-align: center;
    `}
  // > div {
  //   font-size: 2em;
  // }
  > article {
    font-size: 0.8em;
  }
`;

export const BackToHome = styled.div`
  width: 40%;
  height: 100%;
  padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Grants = styled(Contacts)`
  width: 40%;
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

export const LogoContainer = styled.a`
  width: 40%;
  height: 100%;
  padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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
