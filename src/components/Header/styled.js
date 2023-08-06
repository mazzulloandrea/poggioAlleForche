// import tw from 'tailwind-styled-components';
// import { BiArrowBack } from 'react-icons/bi';

// export const GoBack = tw(BiArrowBack)`
//     absolute
//     top-[11px]
//     left-0
//     mt-3
//     ml-3
//     cursor-pointer
// `;

// export const Logo = tw.img`
//   ${({ $isHomepage }) => (!$isHomepage ? 'cursor-pointer' : 'cursor-default')}
// `;

import styled, { css } from 'styled-components';

export const HamburgerStyled = styled.img`
  width: 5vw;
  height: 5vw;
`;

export const BackgroundContainerRules = css`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const HeaderStyled = styled.header`
  height: ${props => (props.ismobile ? '20vh' : '30vh')};
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
`;

export const MenuDesktopStyled = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const MenuVoice = styled.a`
  height: 50%;
  width: 15%;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  background-size: contain;
  ${props =>
    props.ismobile &&
    css`
      font-size: 1.2em;
      margin: 5vh 0 5vh 2vw;
    `}
`;

export const LogoContainer = styled.a`
  width: ${props => (props.ismobile ? '100%' : '40%')};
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
