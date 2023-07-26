import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Cover, Tenuta, Famiglia, Prodotti, Territorio } from './containers';
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
        <Route path={routes.cover} exact element={<Cover />} />
        <Route path={routes.tenuta} exact element={<Tenuta />} />
        <Route path={routes.famiglia} exact element={<Famiglia />} />
        <Route path={routes.prodotti} exact element={<Prodotti />} />
        <Route path={routes.territorio} exact element={<Territorio />} />
        <Route path="*" element={<Navigate replace to={routes.cover} />} />
      </Routes>
    </HistoryRouter>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
);

export default App;
