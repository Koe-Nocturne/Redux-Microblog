import { ADD_POST, DELETE_POST, EDIT_POST } from './actionTypes';

export function addPost(postData) {
  return {
    type: ADD_POST,
    payload: postData
  }
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