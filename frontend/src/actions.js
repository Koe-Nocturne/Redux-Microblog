import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

export function addPostFromAPI(data) {
  return async function (dispatch) {
    try {
      let res = await axios.post(`${BASE_URL}/api/posts/`, data);
      console.log(res);
      dispatch(addPost(res.data))
    } catch (e) {
      dispatch(handleError(e));
    }

    // type: ADD_POST,
    // payload: postData
  }
}

function addPost(postData) {
  return {type: ADD_POST,
    payload: postData }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id
  }
}
export function editPost(postData) {
  return {
    type: EDIT_POST,
    payload: postData
  }
}

export function addComment(id, comment) {
  return {
    type: ADD_COMMENT,
    payload: { id, comment }
  }
}

//will need both postid and id
export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    payload: { postId, commentId }
  }
}
function handleError(e) {
  return { type: "ERROR", error: e }
}