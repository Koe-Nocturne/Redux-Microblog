import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT } from './actionTypes';

export function addPost(postData) {
  return {
    type: ADD_POST,
    payload: postData
  }
}
export function deletePost(id) {
  console.log("actions delete:", id);
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