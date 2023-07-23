import React from 'react';
import { Layout } from '../../layouts';
import { Gallery } from '../../components';
import { MainContainer } from './styles';

const Home = () => {
  const getStyle = () => {
    return {
      overflow: 'auto',
      height: 'auto',
    };
  };

  return (
    <MainContainer style={{ ...getStyle() }}>
      <Layout>
        <Gallery />
      </Layout>
    </MainContainer>
  );
};

export default Home;
