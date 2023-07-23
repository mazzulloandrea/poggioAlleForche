import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import logo from '../../assets/logo.svg';
import routes from '../../utils/routes';
import { GoBack, Logo } from './styles';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomepage = pathname === routes.home;

  const handleClickBackBtn = () => navigate(-1);

  const handleClickLogo = () => {
    if (isHomepage) return null;
    return navigate(routes.home);
  };

  return (
    <header className="rpx-4 py-6 w-full flex items-center justify-center">
      {/* {!isHomepage && <GoBack color="white" size={30} onClick={handleClickBackBtn} />}
      <Logo
        src={logo}
        alt="logo"
        className="min-h-[29px]"
        onClick={handleClickLogo}
        $isHomepage={isHomepage}
      /> */}
    </header>
  );
};

export default Header;
