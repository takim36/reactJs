import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  UPDATE_POST,
} from '../actions';
import _ from 'lodash';

const initialState = {
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return {...state,[action.payload.data.id] : action.payload.data};
    case UPDATE_POST:
      return {...state,[action.payload.id] : action.payload};
     case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case DELETE_POST:
      return _.omit(...state,action.payload.data);
    default:
      break;
  }
  return state;
};

export default postReducer;
