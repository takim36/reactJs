import axios from 'axios';
import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
} from './action_types';
import { API_KEY } from '../utlis/contants';
import { FETCH_WEATHER_URL } from '../utlis/apiUrl';

export const fetchWeather = (city) => {
  const url = `${FETCH_WEATHER_URL}${city}&appid=${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: request,
  }
};