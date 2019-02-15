import axios from 'axios';
import {
  getAllDogsUrl,
  getRandomTextUrl,
  breedImageUrl,
} from '../base/apiUrl';

import {
  FETCH_ALL_DOGS_SUCCESS,
  FETCH_ALL_DOGS_ERROR,
  FETCH_RANDOM_TEXT_SUCCESS,
  FETCH_RANDOM_TEXT_ERROR,
  FETCH_BREAD_IMAGE_SUCCESS,
  FETCH_BREAD_IMAGE_ERROR,
} from './actionTypes';

export const getDogs = () => (dispatch) => {
  const request = axios.get(getAllDogsUrl,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    request.then((res) => {
          dispatch(fetchAllDogsSuccess(res));
        }
      ).catch((err) => {
      dispatch(fetchAllDogsError(err))
    }
   );
};


export const getBreadImage = (breedPattern,selectedBread) => (dispatch) => {

  const url = breedImageUrl.replace("[breedname]", breedPattern);
  const request = axios.get(url,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  request.then((res) => {
      dispatch(getBreadImageSuccess(res,selectedBread));
    }
  ).catch((err) => {
      dispatch(getBreadImageError(err))
    }
  );
};

export const getRandomText = (selectedBread) => (dispatch) => {
  const request = axios.get(getRandomTextUrl,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  request.then((res) => {
      dispatch(getRandomTextSuccess(res,selectedBread));
    }
  ).catch((err) => {
      dispatch(getRandomTextError(err))
    }
  );
};

export const fetchAllDogsSuccess = res => ({
  type: FETCH_ALL_DOGS_SUCCESS,
  payload: res,
});

export const fetchAllDogsError = err => ({
  type: FETCH_ALL_DOGS_ERROR,
  payload: err,
});

export const getRandomTextSuccess = (res,selectedBread) => ({
  type: FETCH_RANDOM_TEXT_SUCCESS,
  payload: { ...res.data, selectedBread},
});

export const getRandomTextError = err => ({
  type: FETCH_RANDOM_TEXT_ERROR,
  payload: err,
});

export const getBreadImageSuccess = (res,selectedBread) => ({
  type: FETCH_BREAD_IMAGE_SUCCESS,
  payload: { ...res.data, selectedBread},
});

export const getBreadImageError = err => ({
  type: FETCH_BREAD_IMAGE_ERROR,
  payload: err,
});