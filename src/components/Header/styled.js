import styled, { css } from 'styled-components';
import { ita, ita_selected, eng, eng_selected } from '../../assets';

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
  height: 15vh;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  ${props =>
    props.istablet
      ? props.isportrait
        ? css``
        : css`
            height: 20vh;
          `
      : css``}}
`;

export const MenuDesktopStyled = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const MenuVoice = styled.a`
  height: 65%;
  width: 20%;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  background-size: contain;
  cursor: pointer;
  ${props =>
    props.ismobile &&
    css`
      margin: 5vh 0 5vh 2vw;
      width: 80%;
      height: 50px;
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
  cursor: pointer;
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

export const MenuText = styled.span`
  color: white;
  text-transform: uppercase;
  font-size: 1em;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    Segoe UI Symbol, 'Noto Color Emoji';
  ${props =>
    props.selected
      ? css`
          display: inline-block;
          border-bottom: 1px solid white;
          padding-bottom: 2px;
        `
      : css``}
`;

export const DesktopLanguageContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  width: 10%;
  justify-content: space-around;
  height: 5%;
`;

export const LanguageChoice = styled.div`
  cursor: pointer;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  background-size: contain;
  width: 100%;
`;

export const MenuVoiceLang = styled(MenuVoice)`
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
`;

export const MenuTextLang = styled(MenuText)`
  ${props =>
    props.selected
      ? css`
          display: inline-block;
          border-bottom: 1px solid gold;
          padding-bottom: 2px;
          color: gold;
        `
      : css``}
`;
