import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes'

const INITIAL_STATE = { posts: [], count: 1 }

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        count: state.count +1, 
        posts: [...state.posts, { ...action.payload, id: state.count, comments: []}]
      };

    case DELETE_POST:
      return {
        ...state, 
        posts: state.posts.filter(post =>  post.id !== +action.payload)
      }

    case EDIT_POST:
      return {
        ...state, 
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return {...post, ...action.payload}
          }
          return post;
        })
      };

    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if(post.id === +action.payload.id) {
            return { ...post, comments: [...post.comments, action.payload.comment]};
          }
          return post;
        })
      }

      case DELETE_COMMENT:
        return {
          ...state,
          posts: state.posts.map(post => {
            if(post.id === +action.payload.id) {
              return { ...post, comments: post.comments.filter(comment =>  comment.id !== action.payload)};
            }
            return post;
          })
        }

    default:
      return state;
  }
}

export default rootReducer;