import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Cover, Page, Tradizione, Viti, Cantina, Prodotti } from './containers';
import { history, routes, COOKIE_NAME, getCookie } from './utils';

// NB use to force STATIC site PRE-LIVE
const staticSite = false;

const App = () => {
  if (!getCookie(COOKIE_NAME)) {
    if (window.location.pathname !== '/') {
      window.location.pathname = '/';
    }
  }
  debugger;
  return (
    <HistoryRouter history={history}>
      {staticSite && (
        <Routes>
          <Route path="*" exact element={<Cover staticSite={staticSite} />} />
        </Routes>
      )}
      {!staticSite && (
        <Routes>
          <Route path={routes.cover} exact element={<Cover />} />
          <Route path={routes.tradizione} exact element={<Tradizione />} />
          <Route path={routes.viti} exact element={<Viti />} />
          <Route path={routes.cantina} exact element={<Cantina />} />
          <Route path={routes.prodotti} exact element={<Prodotti />} />
        </Routes>
      )}
    </HistoryRouter>
  );
};

export default App;
