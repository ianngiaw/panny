import {
  SET_IS_LOADING,
  GET_FLIGHT_INFO_SUCCESS,
  GET_NEXT_FLIGHT_INFO_SUCCESS
} from '../constants';

import {
  getCurrentFlightInfo,
  getNextFlightData
} from '../../../utils/sdk';

export const getFlightInfo = () => {
  return dispatch => {
    dispatch({ type: SET_IS_LOADING });
    getCurrentFlightInfo().then(payload => {
      dispatch({
        type: GET_FLIGHT_INFO_SUCCESS,
        payload
      });
    });
  };
};

export const getNextFlightInfo = () => {
  return dispatch => {
    dispatch({ type: SET_IS_LOADING });
    getNextFlightData().then(payload => {
      dispatch({
        type: GET_NEXT_FLIGHT_INFO_SUCCESS,
        payload
      });
    });
  };
};

export const actionCreators = {
  getFlightInfo,
  getNextFlightInfo
};
