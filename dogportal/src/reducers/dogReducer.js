import {
  FETCH_ALL_DOGS_SUCCESS,
  FETCH_ALL_DOGS_ERROR,
  FETCH_RANDOM_TEXT_SUCCESS,
  FETCH_RANDOM_TEXT_ERROR,
  FETCH_BREAD_IMAGE_SUCCESS,
  FETCH_BREAD_IMAGE_ERROR,
} from '../actions/actionTypes';

import * as strings from '../utils/constants';

const initialState = {
  all: {},
  msg: '',
  imageInfo: [],
  randomTextInfo: []
};

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DOGS_SUCCESS:
      if(action.payload.data.status === strings.SUCCESS) {
        return {
          ...state,
          all: action.payload.data.message,
        };
      }else {
        return {
          ...state,
          msg: action.payload.message,
        };
      }
    case FETCH_ALL_DOGS_ERROR:
      return {
        ...state,
        msg: action.payload.error,
      };
    case FETCH_RANDOM_TEXT_SUCCESS:
      return {
        ...state,
        randomTextInfo: {...state.randomTextInfo,[action.payload.selectedBread]: action.payload[0]},
      };
    case FETCH_RANDOM_TEXT_ERROR:
      return {
        ...state,
        msg: action.payload.error,
      };
    case FETCH_BREAD_IMAGE_SUCCESS:
      return {
        ...state,
        imageInfo: {...state.imageInfo,[action.payload.selectedBread]:action.payload.message},
      };
    case FETCH_BREAD_IMAGE_ERROR:
      return {
        ...state,
        msg: action.payload.error,
      };
    default:
      break;
  }
  return state;
};

export default dogReducer;
