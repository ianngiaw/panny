import { SET_IS_LOADING } from '../constants';

export const myAction = () => {
  return dispatch => {
    dispatch({ type: SET_IS_LOADING });
  };
};

export const actionCreators = {
  myAction
};
