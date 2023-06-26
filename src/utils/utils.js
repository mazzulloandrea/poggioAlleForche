import _ from 'lodash';

export const getDate = dateFrom => {
  return new Date(dateFrom).toLocaleDateString(_, { month: 'short', day: 'numeric' });
};
