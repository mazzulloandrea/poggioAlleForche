import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, NO_MENU_ROUTE_KEY } from '../../utils';
import { slide as MenuHamburger } from 'react-burger-menu';
import {
  hamburger,
  xClose,
  background,
  tenuta,
  tenutaSelected,
  famiglia,
  famigliaSelected,
  territorio,
  territorioSelected,
  prodotti,
  prodottiSelected,
  logo,
  marchio,
} from '../../assets';
import { HeaderStyled, MenuDesktopStyled, MenuVoice, LogoContainer, Logo, Marchio } from './styled';
import './menuMobile.css';

const Header = ({ dimensions }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomepage = pathname === routes.tenuta || pathname === '\\';

  const handleClickLogo = () => {
    if (isHomepage) return null;
    return navigate(routes.tenuta);
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
          <a
            key={menuKey}
            id={menuKey}
            // className={menuKey}
            href={`/${menuKey}`}
            style={{ color: pathname === `/${menuKey}` || pathname === '/' ? 'gold' : 'white' }}
          >
            {menuKey}
          </a>
        ))}
      </MenuHamburger>
    );
  };

  const menuDesktop = () => {
    let menuList = Object.keys(routes).filter(k => k != NO_MENU_ROUTE_KEY);
    menuList.splice(2, 0, 'logo');
    const getSrc = menuKey => {
      switch (menuKey) {
        case routes.tenuta:
          return pathname === menuKey || pathname === '/' ? tenutaSelected : tenuta;
        case routes.famiglia:
          return pathname === menuKey ? famigliaSelected : famiglia;
        case routes.prodotti:
          return pathname === menuKey ? prodottiSelected : prodotti;
        case routes.territorio:
          return pathname === menuKey ? territorioSelected : territorio;
      }
      return ``;
    };
    return (
      <MenuDesktopStyled>
        {menuList.map(menuKey => {
          if (menuKey === 'logo')
            return (
              <LogoContainer onClick={handleClickLogo}>
                <Logo src={logo} />
                <Marchio src={marchio} />
              </LogoContainer>
            );
          return (
            <MenuVoice
              key={menuKey}
              id={menuKey}
              onClick={navigate(`/${menuKey}`)}
              src={getSrc(`/${menuKey}`)}
            ></MenuVoice>
          );
        })}
      </MenuDesktopStyled>
    );
  };

  return (
    <>
      {dimensions.isMobile && menuMobile()}
      <HeaderStyled src={background} ismobile={dimensions.isMobile}>
        {!dimensions.isMobile && menuDesktop()}
      </HeaderStyled>
    </>
  );
};

export default Header;
