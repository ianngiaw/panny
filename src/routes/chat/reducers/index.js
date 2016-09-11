import {
  SET_IS_LOADING,
  GET_FLIGHT_INFO_SUCCESS,
  GET_NEXT_FLIGHT_INFO_SUCCESS
} from '../constants';

const initialState = {
  isLoading: false,
  chatItems: [],
  buttons: ['Meals', 'Restrooms', 'Shopping']
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
            origin: action.payload.originIata,
            destination: action.payload.destIata,
            estimatedArrival: action.payload.time,
            timeRemaining: `${Math.floor(action.payload.minutes / 60)}H ${action.payload.minutes % 60}M`,
            distanceRemaining: `${action.payload.distanceToDestination} Mi`,
            progress: action.payload.progress
          }
        }]
      });

    case GET_NEXT_FLIGHT_INFO_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        chatItems: [...state.chatItems, {
          type: 'NextFlightCard',
          data: action.payload
        }]
      });
      
    default:
      return state;
  }
};
