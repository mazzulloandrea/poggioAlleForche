import React, { useState, useEffect } from 'react';
import { Header, Gallery, Footer } from '../../components';

const Layout = ({ dimensions, children, lang, setLang }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Header dimensions={dimensions} lang={lang} setLang={setLang} />
      <Gallery dimensions={dimensions} lang={lang} />
      {children}
      <Footer dimensions={dimensions} lang={lang} />
    </div>
  );
};

export default Layout;
