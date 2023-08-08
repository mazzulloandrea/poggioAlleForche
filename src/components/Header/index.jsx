import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, NO_MENU_ROUTE_KEY } from '../../utils';
import { slide as MenuHamburger } from 'react-burger-menu';
import {
  hamburger,
  xClose,
  background,
  tradizione,
  tradizioneSelected,
  cantina,
  cantinaSelected,
  vini,
  viniSelected,
  viti,
  vitiSelected,
  logo,
  marchio,
} from '../../assets';
import { HeaderStyled, MenuDesktopStyled, MenuVoice, LogoContainer, Logo, Marchio } from './styled';
import './menuMobile.css';

const Header = ({ dimensions }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomepage = pathname === routes.tradizione || pathname === '\\';

  const handleClickLogo = () => {
    if (isHomepage) return null;
    return navigate(routes.tradizione);
  };

  const menuMobile = () => {
    const menuList = Object.keys(routes).filter(k => k != NO_MENU_ROUTE_KEY);

    return (
      <MenuHamburger
        right
        customBurgerIcon={<img src={hamburger} />}
        customCrossIcon={<img src={xClose} />}
      >
        {menuList.map(menuKey => (
          <MenuVoice
            key={menuKey}
            id={menuKey}
            onClick={() => navigate(`/${menuKey}`)}
            style={{ color: pathname === `/${menuKey}` || pathname === '/' ? 'gold' : 'white' }}
            istablet={1}
          >
            {menuKey}
          </MenuVoice>
        ))}
      </MenuHamburger>
    );
  };

  const LogoComponent = (
    <LogoContainer onClick={handleClickLogo} istablet={dimensions.isTablet ? 1 : 0}>
      <Logo src={logo} />
      <Marchio src={marchio} />
    </LogoContainer>
  );

  const menuDesktop = () => {
    let menuList = Object.keys(routes).filter(k => k != NO_MENU_ROUTE_KEY);
    menuList.splice(2, 0, 'logo');
    const getSrc = menuKey => {
      switch (menuKey) {
        case routes.tradizione:
          return pathname === menuKey || pathname === '/' ? tradizioneSelected : tradizione;
        case routes.cantina:
          return pathname === menuKey ? cantinaSelected : cantina;
        case routes.viti:
          return pathname === menuKey ? vitiSelected : viti;
        case routes.vini:
          return pathname === menuKey ? viniSelected : vini;
      }
      return ``;
    };
    return (
      <MenuDesktopStyled>
        {menuList.map(menuKey => {
          if (menuKey === 'logo') return LogoComponent;
          return (
            <MenuVoice
              key={menuKey}
              id={menuKey}
              onClick={() => {
                console.log(`/${menuKey}`);
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
      {dimensions.isTablet && menuMobile()}
      <HeaderStyled src={background} istablet={dimensions.isTablet ? 1 : 0}>
        {!dimensions.isTablet ? menuDesktop() : LogoComponent}
      </HeaderStyled>
    </>
  );
};

export default Header;
