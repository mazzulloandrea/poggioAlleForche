import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from '../../utils/routes';
import { slide as MenuHamburger } from 'react-burger-menu';
import { hamburger, xClose } from '../../assets';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomepage = pathname === routes.home;

  const handleClickLogo = () => {
    if (isHomepage) return null;
    return navigate(routes.home);
  };

  <MenuHamburger
    right
    customBurgerIcon={<img src={hamburger} />}
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
  </MenuHamburger>;

  return <header className="rpx-4 py-6 w-full flex items-center justify-center"></header>;
};

export default Header;
