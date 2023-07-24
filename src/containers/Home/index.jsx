import React, { useEffect, useState } from 'react';
import { Layout } from '../../containers';
import { Wrapper } from './styled';

const Home = ({ show }) => {
  useEffect(() => {}, []);

  console.log('homepage', show);
  if (!show) return false;
  return (
    <Wrapper>
      <Layout></Layout>
      <article></article>
    </Wrapper>
  );
};

export default Home;
