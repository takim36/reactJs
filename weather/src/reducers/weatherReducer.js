import {
  FETCH_WEATHER_SUCCESS,
} from '../actions/action_types';

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return [ action.payload.data, ...state ];

    default:
      break;
  }
  return state;
};

export default weatherReducer;