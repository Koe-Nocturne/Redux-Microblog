import { ADD_POST, DELETE_POST, EDIT_POST } from './actionTypes'

const INITIAL_STATE = { posts: [] }

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_POST:
      return {
        ...state, 
        posts: [...state.posts, { ...action.payload }]
      };

    case DELETE_POST:
      return {
        ...state, 
        posts: state.posts.filter(post => post.id !== action.payload)
      }

    case EDIT_POST:
      return {
        ...state, 
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return {...post, ...action.payload}
          }
          return post
        })
      };

    default:
      return state;
  }
}

export default rootReducer;