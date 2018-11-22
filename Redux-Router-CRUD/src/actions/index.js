import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST'
const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=takim124';

export const fetchPosts = () => {
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
      payload: request,
    }
  };

export const createPost = (data, callback) => {
  const request = axios.post(`${BASE_URL}/posts${API_KEY}`, {},{data: data}).then(
    () => callback());
  return {
    type: CREATE_POST,
    payload: request,
  }
};

export const fetchPost = (id) => {
  const request = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request,
  }
};

export const updatePost = (data) => {
  return {
    type: UPDATE_POST,
    payload: data,
  }
};

export const deletePost = (id, callback) => {
  const request = axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`).then(
    () => callback());
  return {
    type: DELETE_POST,
    payload: id,
  }
};
