import {
  SET_IS_LOADING,
  GET_FLIGHT_INFO_SUCCESS
} from '../constants';

const initialState = {
  isLoading: false,
  chatItems: [],
  buttons: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_FLIGHT_INFO_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        chatItems: [...state.chatItems, {
          type: 'CurrentFlightCard',
          data: {
            origin: originIata,
            destination: destIata,
            estimatedArrival: action.payload.time,
            timeRemaining: `${Math.floor(minutes / 60)}H ${minutes % 60}M`
            distanceRemaining: `${distance} Mi`
          }
        }]
      });
    default:
      return state;
  }
};
