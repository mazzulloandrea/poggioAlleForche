import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../utils';
import { Header } from '../components';
// import { Header, Footer } from '../components';
// import FloatingButton from '../components/FloatingButton';
import { debounce } from '../utils';
import { useMediaQuery } from 'react-responsive';

import { slide as MenuHamburger } from 'react-burger-menu';
import Hamburger from '../assets/header/hamburger.png';
import xClose from '../assets/header/xClose.png';
import { mobileWidth } from '../constants';
import './stylesMenu.css';

const Layout = ({ children, isVisibleMobileMenu }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomepage = pathname === routes.home;

  // const mobileWidth = 900;
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)',
  // });
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 200);

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  const hambuergerMenu = isVisibleMobileMenu => {
    if (isVisibleMobileMenu === false) return null;
    // console.log(pathname);
    return (
      <MenuHamburger
        right
        customBurgerIcon={<img src={Hamburger} />}
        customCrossIcon={<img src={xClose} />}
      >
        <a
          id="home"
          className="menu-item"
          href="/home"
          style={{ color: pathname === '/home' || pathname === '/' ? 'gold' : 'white' }}
        >
          Tenuta
        </a>
        <a
          id="about"
          className="menu-item"
          href="/famiglia"
          style={{ color: pathname === '/famiglia' ? 'gold' : 'white' }}
        >
          Famiglia
        </a>
        <a
          id="contact"
          className="menu-item"
          href="/prodotti"
          style={{ color: pathname === '/prodotti' ? 'gold' : 'white' }}
        >
          Prodotti
        </a>
        <a
          id="contact"
          className="menu-item"
          href="/territorio"
          style={{ color: pathname === '/territorio' ? 'gold' : 'white' }}
        >
          Territorio
        </a>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a> */}
      </MenuHamburger>
    );
  };

  // const handleClickFloatingBtn = () => navigate(routes.newEvent);
  // console.log(dimensions);
  return (
    <div className="mx-auto bg-xwhite w-full font-montserrat h-screen">
      {dimensions.width < mobileWidth && hambuergerMenu(isVisibleMobileMenu)}
      <div className="flex flex-col w-full h-full">
        {/* {dimensions.width >= mobileWidth && (
          <Header pathname={pathname} isHomepage={isHomepage} dimensions={dimensions} />
        )} */}
        <Header pathname={pathname} isHomepage={isHomepage} dimensions={dimensions} />
        <div className="px-4 mb-5 overflow-y-auto flex-auto">{children}</div>
        {/* <Footer /> */}
      </div>
      {/* {isHomepage && <FloatingButton onClick={handleClickFloatingBtn} />} */}
    </div>
  );
};

export default Layout;
