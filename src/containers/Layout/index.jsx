import React, { useState, useEffect } from 'react';
import { Header, Gallery } from '../../components';

const Layout = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Header></Header>
      <Gallery />
    </div>
  );
};

export default Layout;
