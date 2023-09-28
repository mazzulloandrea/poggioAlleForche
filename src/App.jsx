import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { Cover, Tradizione, Viti, Cantina, Prodotti, Page } from './containers';
import { Cover, Page, Tradizione, Viti, Cantina, Prodotti } from './containers';
import { history, routes } from './utils';

const App = () => (
  <HistoryRouter history={history}>
    <Routes>
      <Route path={routes.cover} exact element={<Cover />} />
      <Route path={routes.tradizione} exact element={<Tradizione />} />
      <Route path={routes.viti} exact element={<Viti />} />
      <Route path={routes.cantina} exact element={<Cantina />} />
      <Route path={routes.prodotti} exact element={<Prodotti />} />
      <Route path="*" element={<Navigate replace to={routes.cover} />} />
    </Routes>
  </HistoryRouter>
);

export default App;
