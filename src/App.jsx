import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Copertina, Home, Famiglia, Prodotti, Territorio } from './containers';
import { history, routes } from './utils';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HistoryRouter history={history}>
      <Routes>
        {/* <Route path={routes.event()} exact element={<EventDetails />} /> */}
        {/* <Route path={routes.famiglia} exact element={<Famiglia />} />
        <Route path={routes.prodotti} exact element={<Prodotti />} />
      <Route path={routes.territorio} exact element={<Territorio />} /> */}
        <Route path={routes.init} exact element={<Copertina />} />
        <Route path={routes.home} exact element={<Home />} />
        <Route path={routes.famiglia} exact element={<Home />} />
        <Route path={routes.prodotti} exact element={<Home />} />
        <Route path={routes.territorio} exact element={<Home />} />
        <Route path="*" element={<Navigate replace to={routes.home} />} />
      </Routes>
    </HistoryRouter>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
);

export default App;
