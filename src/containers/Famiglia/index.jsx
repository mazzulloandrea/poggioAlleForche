import React, { useState, useEffect } from 'react';
import { Layout } from '../../containers';

const Famiglia = () => {
  const [x, setX] = useState(1);

  useEffect(() => {}, []);
  return (
    <Layout>
      <div>Gallery</div>
      <div>Articles</div>
    </Layout>
  );
};

export default Famiglia;
