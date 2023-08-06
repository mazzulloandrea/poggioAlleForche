import React, { useState, useEffect } from 'react';
import { Header, Gallery, Footer } from '../../components';

const Layout = ({ dimensions, children }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Header dimensions={dimensions} />
      <Gallery />
      {children}
      <Footer dimensions={dimensions} />
    </div>
  );
};

export default Layout;
