import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, NO_MENU_ROUTE_KEY } from '../../utils';
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
} from './styled';
import './menuMobile.css';

const Header = ({ dimensions }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomepage = pathname === routes.tradizione || pathname === '\\';

  const handleClickLogo = () => {
    if (isHomepage) return null;
    return navigate(routes.tradizione);
  };

  const getSrc = (menuKey, isMobile) => {
    let menuVoice = '';
    switch (menuKey) {
      case routes.tradizione:
        menuVoice =
          pathname === menuKey || pathname === '/'
            ? isMobile
              ? menuMobileVoice.tradizioneSelected
              : tradizioneSelected
            : isMobile
            ? menuMobileVoice.tradizione
            : tradizione;
        break;
      case routes.cantina:
        menuVoice =
          pathname === menuKey
            ? isMobile
              ? menuMobileVoice.cantinaSelected
              : cantinaSelected
            : isMobile
            ? menuMobileVoice.cantina
            : cantina;
        break;
      case routes.viti:
        menuVoice =
          pathname === menuKey
            ? isMobile
              ? menuMobileVoice.vitiSelected
              : vitiSelected
            : isMobile
            ? menuMobileVoice.viti
            : viti;
        break;
      case routes.prodotti:
        menuVoice =
          pathname === menuKey
            ? isMobile
              ? menuMobileVoice.prodottiSelected
              : prodottiSelected
            : isMobile
            ? menuMobileVoice.prodotti
            : prodotti;
        break;
    }

    return menuVoice;
  };

  const getMenuLabel = menuKey => {
    switch (`/${menuKey}`) {
      case routes.tradizione:
        return 'Tradizione e modernità';
      case routes.viti:
        return 'Le viti';
      case routes.cantina:
        return 'La cantina';
      case routes.prodotti:
        return 'I prodotti';
    }
    return menuKey;
  };

  const menuMobile = () => {
    const menuList = Object.keys(routes).filter(k => k != NO_MENU_ROUTE_KEY);

    return (
      <MenuHamburger
        right
        customBurgerIcon={<img src={menuMobileVoice.hamburger} />}
        customCrossIcon={<img src={menuMobileVoice.xClose} />}
      >
        {menuList.map(menuKey => (
          <MenuVoice
            key={menuKey}
            id={menuKey}
            onClick={() => {
              navigate(`/${menuKey}`);
            }}
            ismobile={1}
          >
            <MenuText
              key={`span_menu_label_${menuKey}`}
              selected={pathname === `/${menuKey}` ? 1 : 0}
            >
              {getMenuLabel(menuKey)}
            </MenuText>
          </MenuVoice>
        ))}
      </MenuHamburger>
    );
  };

  const LogoComponent = (
    <LogoContainer
      key="LogoCOmponent"
      onClick={handleClickLogo}
      istablet={dimensions.isTablet ? 1 : 0}
    >
      <Logo src={logo} />
      <Marchio src={marchio} />
    </LogoContainer>
  );

  const menuDesktop = () => {
    let menuList = Object.keys(routes).filter(k => k != NO_MENU_ROUTE_KEY);
    menuList.splice(2, 0, 'logo');

    return (
      <MenuDesktopStyled>
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

  return (
    <>
      {dimensions.isMobile && menuMobile()}
      <HeaderStyled src={headerBkg}>
        {!dimensions.isMobile ? menuDesktop() : LogoComponent}
      </HeaderStyled>
    </>
  );
};

export default Header;
