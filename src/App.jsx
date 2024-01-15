import React, { useState, lazy, Suspense } from 'react';
import { Routes, HashRouter, Route } from 'react-router-dom';
import { Cover, Tradizione, Viti, Cantina, Prodotti } from './containers';
import { history, routes, COOKIE_NAME, getCookie } from './utils';

// const Cover = lazy(() => import('./containers/Cover'));
// const Tradizione = lazy(() => import('./containers/Tradizione'));
// const Viti = lazy(() => import('./containers/Viti'));
// const Cantina = lazy(() => import('./containers/Cantina'));
// const Prodotti = lazy(() => import('./containers/Prodotti'));

// NB use to force STATIC site PRE-LIVE
// const staticSite = false;

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
    <HashRouter basename="/">
      <Routes>
        <Route path={routes.tradizione} element={<Tradizione {...lanProps} />} />
        <Route path={routes.viti} element={<Viti {...lanProps} />} />
        <Route path={routes.cantina} element={<Cantina {...lanProps} />} />
        <Route path={routes.prodotti} element={<Prodotti {...lanProps} />} />
        <Route path={routes.cover} element={<Cover {...lanProps} />} />
      </Routes>
    </HashRouter>
  );
  // div class class class(staticSite) {
  //   return (
  //     <HashRouter>
  //       <Route path="*" element={<Cover staticSite={staticSite} />} />
  //     </HashRouter>
  //   );
  // }
  // return (
  //   <Suspense fallback={<div>Loading...</div>}>
  //     <HashRouter basename="/">
  //       <Routes>
  //       <Route path={routes.tradizione} element={<Tradizione {...lanProps} />} />
  //       <Route path={routes.viti} element={<Viti {...lanProps} />} />
  //       <Route path={routes.cantina} element={<Cantina {...lanProps} />} />
  //       <Route path={routes.prodotti} element={<Prodotti {...lanProps} />} />
  //       <Route path={routes.cover} element={<Cover {...lanProps} />} />
  //       </Routes>
  //     </HashRouter>
  //   </Suspense>
  // );

  // return (
  //   <HistoryRouter history={history}>
  //     {staticSite && (
  //       <Routes>
  //         <Route path="*" exact element={<Cover staticSite={staticSite} />} />
  //       </Routes>
  //     )}
  //     {!staticSite && (
  //       <Routes>
  //         <Route path={routes.cover} exact element={<Cover {...lanProps} />} />
  //         <Route path={routes.tradizione} exact element={<Tradizione {...lanProps} />} />
  //         <Route path={routes.viti} exact element={<Viti {...lanProps} />} />
  //         <Route path={routes.cantina} exact element={<Cantina {...lanProps} />} />
  //         <Route path={routes.prodotti} exact element={<Prodotti {...lanProps} />} />
  //       </Routes>
  //     )}
  //   </HistoryRouter>
  // );
};

export default App;
