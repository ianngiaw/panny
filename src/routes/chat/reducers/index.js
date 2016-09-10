import { MY_ROUTE_ACION } from '../constants';

const initialState = {
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_ROUTE_ACION:
      return Object.assign({}, state, {
        isLoading: true
      });
    default:
      return state;
  }
};
