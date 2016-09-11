import moment from 'moment';
import {
  SET_IS_LOADING,
  SET_FOOD_SELECTED,
  RESET_BUTTONS,
  ADD_RESTROOM_CARD,
  ADD_PANNY_TEXT,
  ADD_USER_TEXT,
  GET_FLIGHT_INFO_SUCCESS,
  GET_NEXT_FLIGHT_INFO_SUCCESS,
  GET_FOOD_ITEMS_SUCCESS
} from '../constants';

const initialState = {
  isLoading: false,
  chatItems: [],
  buttons: [
    { label: 'Meals', value: 'GET_MEALS'},
    { label: 'Restrooms', value: 'GET_RESTROOMS'},
    { label: 'Shopping', value: 'GET_SHOPPING'}
  ],
  isFoodSelected: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });

    case SET_FOOD_SELECTED:
      return Object.assign({}, state, {
        isFoodSelected: true
      });

    case RESET_BUTTONS:
      return Object.assign({}, state, {
        buttons: initialState.buttons
      });

    case ADD_RESTROOM_CARD:
      if (action.payload.isFull) {
        return Object.assign({}, state, {
          isLoading: false,
          chatItems: [...state.chatItems, {
            type: 'RestroomCard',
            data: action.payload
          }],
          buttons: [
            { label: 'Notify', value: 'NOTIFY_RESTROOM'},
            { label: 'Okay', value: 'OKAY_RESTROOM'}
          ]
        });
      } else {
        return Object.assign({}, state, {
          isLoading: false,
          chatItems: [...state.chatItems, {
            type: 'RestroomCard',
            data: action.payload
          }]
        });
      }

    case ADD_PANNY_TEXT:
      return Object.assign({}, state, {
        isLoading: false,
        chatItems: [...state.chatItems, {
          type: 'PannyText',
          data: action.payload
        }]
      });

    case ADD_USER_TEXT:
      return Object.assign({}, state, {
        isLoading: false,
        chatItems: [...state.chatItems, {
          type: 'UserText',
          data: action.payload
        }]
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
          data: {
            origin: action.payload.origin,
            destination: action.payload.destination,
            flightNumber: action.payload.flightNumber,
            departureGate: action.payload.departureGate,
            departureTime: moment(action.payload.departureTime).format('HH:mm')
          }
        }]
      });

    case GET_FOOD_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        chatItems: [...state.chatItems, {
          type: 'FoodCard',
          data: {
            foodItems: action.payload
          }
        }],
        buttons: [
          { label: 'Select', value: 'SELECT_MEAL'},
          { label: 'More Info', value: 'VIEW_MEAL_NUTRITIONAL_INFO'},
          { label: 'I\'ll pick later', value: 'PICK_MEAL_LATER'}
        ]
      });

    default:
      return state;
  }
};
