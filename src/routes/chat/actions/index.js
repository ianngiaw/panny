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

export const selectButton = value => {
  return dispatch => {
    switch (value) {
      case 'GET_MEALS':
        dispatch(addUserText('What\'s for dinner?'));
        setTimeout(() => {
          dispatch(addPannyText('Here are your options for dinner:'));
          dispatch(getFoodItems());
        }, 500);
        break;
      case 'SELECT_MEAL':
        dispatch(addPannyText('Got it!'));
        dispatch(resetButtons());
        break;
      case 'PICK_MEAL_LATER':
        dispatch(addPannyText('Alright! Take your time.'));
        dispatch(resetButtons());
        break;
      case 'GET_RESTROOMS':
        dispatch(addUserText('Show me the status of the restrooms.'));
        setTimeout(() => {
          dispatch(addPannyText('Here you go! It looks like they\'re all occupied.'));
          dispatch(addRestroomCard(true));
        }, 500);
        break;
      case 'NOTIFY_RESTROOM':
        dispatch(addUserText('Notify me when one is vacant.'));
        setTimeout(() => {
          dispatch(addPannyText('Sure thing!'));
          dispatch(resetButtons());
        }, 500);
        setTimeout(() => {
          dispatch(addPannyText('I found a vacant restroom!'));
          dispatch(addRestroomCard(false));
        }, 4000);
        break;
      case 'OKAY_RESTROOM':
        dispatch(addUserText('Alright. Thanks!'));
        dispatch(resetButtons());
        break;
      case 'GET_SHOPPING':
        dispatch(addPannyText('Looks like you have a connecting flight.'));
        dispatch(getNextFlightInfo());
        setTimeout(() => {
          dispatch(addPannyText('Hope you enjoyed your flight! See you later!'));
          dispatch(resetButtons());
        }, 500);
    }
  };
};

export const initialLaunch = () => {
  return dispatch => {
    getPassengerName()
      .then(names => {
        setTimeout(() => {
          dispatch(addPannyText(`Hi, ${names.firstName}! Welcome onboard! Here's some information about the flight you're on.`)); // eslint-disable-line
        }, 500);
        setTimeout(() => {
          dispatch(getFlightInfo());
        }, 1000);
        setTimeout(() => {
          dispatch(addPannyText('Let me know if there\'s anything else you need.')); // eslint-disable-line
        }, 1500);
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
  selectButton,
  addPannyText,
  addUserText,
  getFlightInfo,
  getNextFlightInfo,
  getFoodItems
};
