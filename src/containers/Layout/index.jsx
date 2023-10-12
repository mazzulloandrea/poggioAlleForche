import React, { useState, useEffect } from 'react';
import { Header, Gallery, Footer } from '../../components';

const Layout = ({ dimensions, galleryRef, inViewport, children }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Header dimensions={dimensions} />
      <Gallery dimensions={dimensions} galleryRef={galleryRef} inViewport={inViewport} />
      {children}
      <Footer dimensions={dimensions} />
    </div>
  );
};

export default Layout;
