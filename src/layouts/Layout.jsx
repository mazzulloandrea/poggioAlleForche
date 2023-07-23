import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from '../utils/routes';
import { Header, Footer } from '../components';
import FloatingButton from '../components/FloatingButton';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomepage = pathname === routes.home;

  const handleClickFloatingBtn = () => navigate(routes.newEvent);

  return (
    <div className="mx-auto bg-xgray w-full font-montserrat h-screen">
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="px-4 mb-5 overflow-y-auto flex-auto">{children}</div>
        <Footer />
      </div>
      {isHomepage && <FloatingButton onClick={handleClickFloatingBtn} />}
    </div>
  );
};

export default Layout;
