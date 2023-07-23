import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import logo from '../../assets/logo.svg';
// import PoggioLogo from '../../assets/header/logo.png';
// import PoggioMarchio from '../../assets/header/marchio.png';
import routes from '../../utils/routes';
// import { GoBack } from './styles';
import { slide as MenuHamburger } from 'react-burger-menu';
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
// import { routes } from '../../utils';
import Hamburger from '../../assets/header/hamburger.png';
import xClose from '../../assets/header/xClose.png';
// import './stylesMenu.css';
import { mobileWidth } from '../../constants';

const Header = ({ pathname, isHomepage, dimensions }) => {
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  // const isHomepage = pathname === routes.home;

  const handleClickBackBtn = () => navigate(-1);

  const handleClickLogo = () => {
    if (isHomepage) return null;
    return navigate(routes.home);
  };

  // const menuList = [
  //   { route: '/', label: 'la tenuta' },
  //   { route: 'famiglia', label: 'la famiglia' },
  //   { route: 'prodotti', label: 'i prodotti' },
  //   { route: 'territorio', label: 'territorio' },
  // ];

  const logoProps =
    "bg-[url('src/assets/header/logo.png')] bg-contain bg-no-repeat bg-center w-20 h-20";
  const marchioProps =
    "bg-[url('src/assets/header/marchio.png')] bg-contain bg-no-repeat bg-center w-full h-24";

  // const hambuergerMenu = () => {
  //   if (!isVisibleMobileMenu) return null;
  //   return (
  //     <>
  //       <div className="w-2/6 flex flex-col	items-center justify-center">
  //         <div className={logoProps} />
  //         <div className={marchioProps} />
  //       </div>
  //       <MenuHamburger
  //         right
  //         customBurgerIcon={<img src={Hamburger} />}
  //         customCrossIcon={<img src={xClose} />}
  //       >
  //         {/* <a id="home" className="menu-item" href="/home">
  //           Tenuta
  //         </a>
  //         <a id="about" className="menu-item" href="/famiglia">
  //           Famiglia
  //         </a>
  //         <a id="contact" className="menu-item" href="/prodotti">
  //           Prodotti
  //         </a>
  //         <a id="contact" className="menu-item" href="/territorio">
  //           Territorio
  //         </a> */}
  //       </MenuHamburger>
  //     </>
  //   );
  // };

  const getHeader = () => {
    const linkProps = 'w-1/6 h-20 text-center flex justify-center items-end self-end';
    const linkMenuProps = 'w-full h-full bg-contain bg-no-repeat bg-center self-end ';
    const fixWhiteLinkPosition = 'bg-[position:50%-18px]';
    if (dimensions.width < mobileWidth) {
      return (
        <a className="w-2/6 flex flex-col	items-center justify-center" href="/home">
          <div className={logoProps} />
          <div className={marchioProps} />
        </a>
      );
    }
    return (
      <>
        <a href="/home" className={linkProps}>
          <div
            className={`${linkMenuProps} ${
              pathname === '/home' || pathname === '/'
                ? "bg-[url('src/assets/header/menu/La-tenuta-ORO.png')]"
                : `bg-[url('src/assets/header/menu/La-tenuta-BIANCO.png')] ${fixWhiteLinkPosition}`
            }`}
          />
        </a>
        <a href="/famiglia" className={linkProps}>
          <div
            className={`${linkMenuProps} ${
              pathname === '/famiglia'
                ? "bg-[url('src/assets/header/menu/La-famiglia-ORO.png')]"
                : `bg-[url('src/assets/header/menu/La-famiglia-BIANCO.png')] ${fixWhiteLinkPosition}`
            }`}
          />
        </a>
        <a className="w-2/6 flex flex-col	items-center justify-center" href="/home">
          <div className={logoProps} />
          <div className={marchioProps} />
        </a>
        <a href="/prodotti" className={linkProps}>
          <div
            className={`${linkMenuProps} ${
              pathname === '/prodotti'
                ? "bg-[url('src/assets/header/menu/I-prodotti-ORO.png')]"
                : `bg-[url('src/assets/header/menu/I-prodotti-BIANCO.png')] ${fixWhiteLinkPosition}`
            }`}
          />
        </a>
        <a href="/territorio" className={linkProps}>
          <div
            className={`${linkMenuProps} ${
              pathname === '/territorio'
                ? "bg-[url('src/assets/header/menu/Il-territorio-ORO.png')]"
                : `bg-[url('src/assets/header/menu/Il-territorio-BIANCO.png')] ${fixWhiteLinkPosition}`
            }`}
          />
        </a>
      </>
    );
  };

  return (
    <header
      className="rpx-4 w-full h-56 flex items-center justify-center bg-[url('src/assets/header/background.png')] bg-cover"
      style={{ backgroundPosition: '0 -250px' }}
    >
      {/* {dimensions.width > mobileWidth ? desktopMenu() : hambuergerMenu()} */}
      {getHeader()}
    </header>
  );
};

export default Header;
