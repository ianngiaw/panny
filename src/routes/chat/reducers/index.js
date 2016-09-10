import {
  SET_IS_LOADING
} from '../constants';

const initialState = {
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    default:
      return state;
  }
};
