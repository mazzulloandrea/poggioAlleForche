import React, { useState } from 'react';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Cover, Tradizione, Viti, Cantina, Prodotti } from './containers';
import { history, routes, COOKIE_NAME, getCookie } from './utils';

// NB use to force STATIC site PRE-LIVE
const staticSite = false;

const App = () => {
  const [lang, setLang] = useState('ita');

  const lanProps = {
    lang,
    setLang,
  };
  if (!getCookie(COOKIE_NAME)) {
    if (window.location.pathname !== '/') {
      window.location.pathname = '/';
    }
  }
  return (
    <HistoryRouter history={history}>
      {staticSite && (
        <Routes>
          <Route path="*" exact element={<Cover staticSite={staticSite} />} />
        </Routes>
      )}
      {!staticSite && (
        <Routes>
          <Route path={routes.cover} exact element={<Cover {...lanProps} />} />
          <Route path={routes.tradizione} exact element={<Tradizione {...lanProps} />} />
          <Route path={routes.viti} exact element={<Viti {...lanProps} />} />
          <Route path={routes.cantina} exact element={<Cantina {...lanProps} />} />
          <Route path={routes.prodotti} exact element={<Prodotti {...lanProps} />} />
        </Routes>
      )}
    </HistoryRouter>
  );
};

export default App;
