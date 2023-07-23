const routes = {
  home: '/',
  login: '/login',
  events: '/events',
  event: (id = ':id') => `/events/${id}`,
  newEvent: '/new-event',
};

export default routes;
