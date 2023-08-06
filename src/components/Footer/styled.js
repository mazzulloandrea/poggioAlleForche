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
  align-items: flex-start;
  padding: 2% 0;
  ${props =>
    props.ismobile &&
    css`
      height: 90vh;
      flex-direction: column;
      align-items: center;
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
  text-align: center;
  > div {
    font-size: 2em;
  }
  > article {
    font-size: 1.3em;
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
