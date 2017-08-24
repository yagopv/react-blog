import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts() {
  return function (dispatch, getState) {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((data) => {
      dispatch({
        type: FETCH_POSTS,
        payload: data
      });
    });
  };
}

export function createPost(values, callback) {
  return function (dispatch, getState) {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
      .then(callback)
      .then((data) => {
      dispatch({
        type: CREATE_POST,
        payload: request
      });
    });
  };
}

export function fetchPost(id) {
  return function (dispatch, getState) {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((data) => {
      dispatch({
        type: FETCH_POST,
        payload: data
      });
    });
  };
}

export function deletePost(id, callback) {
  return function (dispatch, getState) {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(callback)
    .then((data) => {
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    });
  };
}