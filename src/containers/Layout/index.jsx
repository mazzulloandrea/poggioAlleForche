import React, { useState, useEffect } from 'react';
import { Header, Gallery } from '../../components';

const Layout = ({ dimensions }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Header dimensions={dimensions}></Header>
      <Gallery />
    </div>
  );
};

export default Layout;
