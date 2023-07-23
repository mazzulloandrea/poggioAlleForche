import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, EventDetails, NewEvent } from './containers';
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
        <Route path={routes.home} exact element={<Home />} />
        <Route path={routes.event()} exact element={<EventDetails />} />
        <Route path={routes.newEvent} exact element={<NewEvent />} />
        <Route path="*" element={<Navigate replace to={routes.home} />} />
      </Routes>
    </HistoryRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
