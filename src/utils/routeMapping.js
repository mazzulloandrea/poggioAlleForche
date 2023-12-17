import routes from './routes';

const getRouteLabel = ({ route, lang }) => {
  if (lang === 'ita') {
    switch (`/${route}`) {
      case routes.tradizione:
        return 'Tradizione e modernità';
      case routes.viti:
        return 'Le viti';
      case routes.cantina:
        return 'La cantina';
      case routes.prodotti:
        return 'I prodotti';
    }
  }
  if (lang === 'eng') {
    switch (`/${route}`) {
      case routes.tradizione:
        return 'tradition and innovation';
      case routes.viti:
        return 'grapevines';
      case routes.cantina:
        return 'wine cellar';
      case routes.prodotti:
        return 'products';
    }
  }
  return route;
};

export default getRouteLabel;
