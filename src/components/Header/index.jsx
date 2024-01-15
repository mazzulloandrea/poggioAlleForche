import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  routes,
  NO_MENU_ROUTE_KEY,
  isScreenInPortrait,
  getScreenDimensions,
  getRouteLabel,
} from '../../utils';
import { slide as MenuHamburger } from 'react-burger-menu';
import {
  tradizione,
  tradizioneSelected,
  cantina,
  cantinaSelected,
  prodotti,
  prodottiSelected,
  viti,
  vitiSelected,
  tradizione_en,
  tradizioneSelected_en,
  cantina_en,
  cantinaSelected_en,
  prodotti_en,
  prodottiSelected_en,
  viti_en,
  vitiSelected_en,
  logo,
  marchio,
  menuMobile as menuMobileVoice,
  headerBkg,
  ita,
  ita_selected,
  eng,
  eng_selected,
} from '../../assets';
import {
  HeaderStyled,
  MenuDesktopStyled,
  MenuVoice,
  LogoContainer,
  Logo,
  Marchio,
  MenuText,
  DesktopLanguageContainer,
  LanguageChoice,
  MenuVoiceLang,
  MenuTextLang,
} from './styled';
import './menuMobile.css';

const Header = ({ lang, setLang }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dimensions = getScreenDimensions();
  const { isMini, isMobile, isTablet, isSmallScreen, isMediumScreen, isBigScreen } = dimensions;
  const defProps = {
    ismini: isMini ? 1 : 0,
    ismobile: isMobile ? 1 : 0,
    istablet: isTablet ? 1 : 0,
    issmallscreen: isSmallScreen ? 1 : 0,
    ismediumscreen: isMediumScreen ? 1 : 0,
    isbigscreen: isBigScreen ? 1 : 0,
    isportrait: isScreenInPortrait(),
  };
  const isHomepage = pathname === routes.tradizione || pathname === '\\';
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  const handleClickLogo = () => {
    if (isHomepage) return null;
    return navigate(routes.tradizione);
  };

  const getSrc = menuKey => {
    let menuVoice = '';
    switch (menuKey) {
      case routes.tradizione:
        if (lang === 'eng') {
          menuVoice =
            pathname.includes(menuKey) || pathname === '/' ? tradizioneSelected_en : tradizione_en;
        } else {
          menuVoice =
            pathname.includes(menuKey) || pathname === '/' ? tradizioneSelected : tradizione;
        }
        break;
      case routes.cantina:
        if (lang === 'eng') {
          menuVoice = pathname.includes(menuKey) ? cantinaSelected_en : cantina_en;
        } else {
          menuVoice = pathname.includes(menuKey) ? cantinaSelected : cantina;
        }
        break;
      case routes.viti:
        if (lang === 'eng') {
          menuVoice = pathname.includes(menuKey) ? vitiSelected_en : viti_en;
        } else {
          menuVoice = pathname.includes(menuKey) ? vitiSelected : viti;
        }
        break;
      case routes.prodotti:
        if (lang === 'eng') {
          menuVoice = pathname.includes(menuKey) ? prodottiSelected_en : prodotti_en;
        } else {
          menuVoice = pathname.includes(menuKey) ? prodottiSelected : prodotti;
        }
        break;
    }

    return menuVoice;
  };

  const handleStateChange = state => {
    setMenuMobileOpen(state.isOpen);
  };

  const getLangSrc = (label, isSelected) => {
    if (label === 'ita') {
      return isSelected ? ita_selected : ita;
    }
    return isSelected ? eng_selected : eng;
  };

  const LanguageSection = isMobile => {
    if (isMobile) {
      return ['ita', 'eng'].map(l => (
        <MenuVoiceLang key={l} id={l} onClick={() => setLang(l)} ismobile={1}>
          <MenuTextLang key={`span_menu_label_${l}`} selected={lang === l ? 1 : 0}>
            {l}
          </MenuTextLang>
        </MenuVoiceLang>
      ));
    }
    return ['ita', 'eng'].map(l => (
      <LanguageChoice
        key={l}
        onClick={() => setLang(l)}
        src={getLangSrc(l, lang === l)}
      ></LanguageChoice>
    ));
  };

  const menuMobile = () => {
    const menuList = Object.keys(routes).filter(k => k != NO_MENU_ROUTE_KEY);

    return (
      <MenuHamburger
        right
        customBurgerIcon={<img src={menuMobileVoice.hamburger} />}
        customCrossIcon={<img src={menuMobileVoice.xClose} />}
        isOpen={menuMobileOpen}
        onStateChange={state => handleStateChange(state)}
      >
        {LanguageSection(true)}
        {menuList.map(menuKey => (
          <MenuVoice
            key={menuKey}
            id={menuKey}
            onClick={() => {
              navigate(`/${menuKey}`);
              setMenuMobileOpen(false);
            }}
            ismobile={1}
          >
            <MenuText
              key={`span_menu_label_${menuKey}`}
              selected={pathname.includes(`/${menuKey}`) ? 1 : 0}
            >
              {getRouteLabel({ route: menuKey, lang })}
            </MenuText>
          </MenuVoice>
        ))}
      </MenuHamburger>
    );
  };

  const LogoComponent = (
    <LogoContainer key="LogoCOmponent" onClick={handleClickLogo} istablet={isTablet ? 1 : 0}>
      <Logo src={logo} />
      <Marchio src={marchio} />
    </LogoContainer>
  );

  const menuDesktop = () => {
    let menuList = Object.keys(routes).filter(k => k != NO_MENU_ROUTE_KEY);
    menuList.splice(2, 0, 'logo');

    return (
      <MenuDesktopStyled>
        <DesktopLanguageContainer>{LanguageSection()}</DesktopLanguageContainer>
        {menuList.map(menuKey => {
          if (menuKey === 'logo') return LogoComponent;
          return (
            <MenuVoice
              key={menuKey}
              id={menuKey}
              onClick={() => {
                navigate(`/${menuKey}`);
              }}
              src={getSrc(`/${menuKey}`)}
            />
          );
        })}
      </MenuDesktopStyled>
    );
  };

  const isMenuHamburger = () => {
    // consider only for dimension non for device
    if (isMobile || isMini) return true;
    return false;
  };

  return (
    <>
      {isMenuHamburger() && menuMobile()}
      <HeaderStyled src={headerBkg} {...defProps}>
        {isMenuHamburger() ? LogoComponent : menuDesktop()}
      </HeaderStyled>
    </>
  );
};

export default Header;
