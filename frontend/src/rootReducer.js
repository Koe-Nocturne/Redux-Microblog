import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_ALL_POSTS,
  GET_ALL_TITLES
} from "./actionTypes";

const INITIAL_STATE = { posts: [], titles: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      const { id, title, description } = action.payload;
      return {
        ...state,
        posts: [...state.posts, { ...action.payload }],
        titles: [...state.titles, { id, title, description }]
      };
    }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== +action.payload),
        titles: state.titles.filter(post => post.id !== +action.payload)
      };

    case EDIT_POST: {
      const { id, title, description } = action.payload;
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === id) {
            return { ...post, ...action.payload };
          }
          return post;
        }),
        titles: state.titles.map(title => {
          if (title.id === id) {
            return { ...title, title, description };
          }
          return title;
        })
      };
    }
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === +action.payload.id) {
            return {
              ...post,
              comments: [
                ...post.comments,
                {
                  ...action.payload.text
                }
              ]
            };
          }
          return post;
        })
      };

    case DELETE_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === +action.payload.postId) {
            return {
              ...post,
              comments: post.comments.filter(
                comment => comment.id !== action.payload.commentId
              )
            };
          }
          return post;
        })
      };

    case GET_ALL_POSTS:
      console.log("Rootreducer titles:", state.titles);
      return {
        ...state,
        posts: [...state.posts, ...action.payload]
      };

    case GET_ALL_TITLES:
      return {
        ...state,
        titles: [...state.titles, ...action.payload.titles]
      };

    default:
      return state;
  }
}

export default rootReducer;
