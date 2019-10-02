import { ADD_POST, DELETE_POST, EDIT_POST } from './actionTypes'

const INITIAL_STATE = { posts: [], count: 1 }

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        count: state.count +1, 
        posts: [...state.posts, { ...action.payload, id: state.count }]
      };

    case DELETE_POST:
      return {
        ...state, 
        posts: state.posts.filter(post =>  post.id !== +action.payload)
      }

    case EDIT_POST:
      console.log("action payload in root: ", action.payload);
      console.table(state);
      return {
        ...state, 
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return {...post, ...action.payload}
          }
          return post;
        })
      };

    default:
      console.warn("cannot find thing", action.type);
      return state;
  }
}

export default rootReducer;