import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, GET_ALL_POSTS, GET_ALL_TITLES } from './actionTypes';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

export function addPostFromAPI(data) {
  return async function (dispatch) {
    try {
      let res = await axios.post(`${BASE_URL}/api/posts/`, data);
      dispatch(addPost(res.data))
    } catch (e) {
      dispatch(handleError(e));
    }
  }
}

export function deletePostFromAPI(data) {
  return async function (dispatch) {
    try {
      await axios.delete(`${BASE_URL}/api/posts/${data}`);
      dispatch(deletePost(data))
    } catch (e) {
      dispatch(handleError(e));
    }
  }
}

export function editPostFromAPI(data) {
  return async function (dispatch) {
    try {
      let res = await axios.put(`${BASE_URL}/api/posts/${data.id}`, data);
      console.log(res);
      dispatch(editPost(res.data))
    } catch (e) {
      dispatch(handleError(e));
    }
  }
}

export function addCommentFromAPI(postId, data) {
  return async function (dispatch) {
    try {
      console.log("actions delete comment", typeof postId, data)
      let res = await axios.post(`${BASE_URL}/api/posts/${postId}/comments/`, data);
      console.log(res);
      dispatch(addComment(res.data))
    } catch (e) {
      dispatch(handleError(e));
    }
  }
}

export function deleteCommentFromAPI(data) {
  return async function (dispatch) {
    try {
      let res = await axios.post(`${BASE_URL}/api/posts/`, data);
      console.log(res);
      dispatch(deleteComment(res.data));
    } catch (e) {
      dispatch(handleError(e));
    }
  }
}

export function getAllTitlesFromAPI() {
  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/api/posts/`);
      console.log("getalltitltesfromapi:", res)
      dispatch(getAllTitles(res.data));
    } catch (e) {
      dispatch(handleError(e));
    }
  }
}

export function getAllPostsFromAPI(data) {
  return async function (dispatch) {
    try {
      let promises = data.map(title => axios.get(`${BASE_URL}/api/posts/${title.id}`))
      let res = await Promise.all(promises);
      console.log("getallpostsfromAPI:", res)
      dispatch(getAllPosts(res.data));
    } catch (e) {
      dispatch(handleError(e));
    }
  }
}

function addPost(postData) {
  return {type: ADD_POST,
    payload: postData }
}

function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id
  }
}
function editPost(postData) {
  return {
    type: EDIT_POST,
    payload: postData
  }
}

function addComment(id, text) {
  return {
    type: ADD_COMMENT,
    payload: { id, text }
  }
}

function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    payload: { postId, commentId }
  }
}

function getAllTitles(titles) {
  return {
    type: GET_ALL_TITLES,
    payload: { titles }
  }
}

function getAllPosts(posts) {
  return {
    type: GET_ALL_POSTS,
    payload: { posts }
  }
}

function handleError(e) {
  return { type: "ERROR", error: e }
}