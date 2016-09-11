import {
  SET_IS_LOADING,
  RESET_BUTTONS,
  GET_FLIGHT_INFO_SUCCESS,
  GET_NEXT_FLIGHT_INFO_SUCCESS,
  GET_FOOD_ITEMS_SUCCESS,
  ADD_RESTROOM_CARD,
  ADD_PANNY_TEXT,
  ADD_USER_TEXT
} from '../constants';

import {
  getPassengerName,
  getCurrentFlightInfo,
  getNextFlightData
} from '../../../utils/sdk';

export const initialLaunch = () => {
  return dispatch => {
    getPassengerName()
      .then(names => {
        dispatch(addPannyText(`Hi, ${names.firstName}! Welcome onboard!`));
        dispatch(getFlightInfo());
      });
  };
};

export const addPannyText = text => {
  return dispatch => {
    dispatch({ type: ADD_PANNY_TEXT, payload: { text } });
  };
};

export const addUserText = text => {
  return dispatch => {
    dispatch({ type: ADD_USER_TEXT, payload: { text } });
  };
};

export const addRestroomCard = isFull => {
  return dispatch => {
    dispatch({ type: ADD_RESTROOM_CARD, payload: { isFull } });
  };
};

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

export const getFoodItems = () => {
  return dispatch => {
    dispatch({ type: SET_IS_LOADING });
    setTimeout(() => {
      dispatch({
        type: GET_FOOD_ITEMS_SUCCESS,
        payload: [{
          name: 'Bolognese Pasta',
          image: 'http://i.imgur.com/w6B5iX5.jpg'
        },{
          name: 'Salmon',
          image: 'http://i.imgur.com/Eu0unYs.jpg'
        },{
          name: 'Salad',
          image: 'http://i.imgur.com/9k0482t.jpg'
        }]
      });
    }, 200);
  };
};

export const resetButtons = () => {
  return dispatch => {
    dispatch({ type: RESET_BUTTONS });
  };
};

export const actionCreators = {
  initialLaunch,
  addPannyText,
  addUserText,
  getFlightInfo,
  getNextFlightInfo,
  getFoodItems
};
