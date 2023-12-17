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

  const getSrc = (menuKey, isMobile) => {
    let menuVoice = '';
    switch (menuKey) {
      case routes.tradizione:
        if (lang === 'eng') {
          menuVoice =
            pathname === menuKey || pathname === '/' ? tradizioneSelected_en : tradizione_en;
        } else {
          menuVoice = pathname === menuKey || pathname === '/' ? tradizioneSelected : tradizione;
        }
        // ? isMobile
        //   ? menuMobileVoice.tradizioneSelected
        //   : tradizioneSelected
        // : isMobile
        // ? menuMobileVoice.tradizione
        // : tradizione;
        break;
      case routes.cantina:
        if (lang === 'eng') {
          menuVoice = pathname === menuKey ? cantinaSelected_en : cantina_en;
        } else {
          menuVoice = pathname === menuKey ? cantinaSelected : cantina;
        }
        // ? isMobile
        //   ? menuMobileVoice.cantinaSelected
        //   : cantinaSelected
        // : isMobile
        // ? menuMobileVoice.cantina
        // : cantina;
        break;
      case routes.viti:
        if (lang === 'eng') {
          menuVoice = pathname === menuKey ? vitiSelected_en : viti_en;
        } else {
          menuVoice = pathname === menuKey ? vitiSelected : viti;
        }

        // ? isMobile
        //   ? menuMobileVoice.vitiSelected
        //   : vitiSelected
        // : isMobile
        // ? menuMobileVoice.viti
        // : viti;
        break;
      case routes.prodotti:
        if (lang === 'eng') {
          menuVoice = pathname === menuKey ? prodottiSelected_en : prodotti_en;
        } else {
          menuVoice = pathname === menuKey ? prodottiSelected : prodotti;
        }

        // ? isMobile
        //   ? menuMobileVoice.prodottiSelected
        //   : prodottiSelected
        // : isMobile
        // ? menuMobileVoice.prodotti
        // : prodotti;
        break;
    }

    return menuVoice;
  };

  const handleStateChange = state => {
    setMenuMobileOpen(state.isOpen);
  };

  const LanguageSection = () => {
    return ['ita', 'eng'].map(l => (
      <LanguageChoice key={l} onClick={() => setLang(l)} selected={lang === l}>
        {l}
      </LanguageChoice>
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
        {LanguageSection()}
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
              selected={pathname === `/${menuKey}` ? 1 : 0}
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
