import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_ALL_POSTS,
  GET_ALL_TITLES,
  UPVOTE,
  DOWNVOTE
} from "./actionTypes";

const INITIAL_STATE = { posts: [], titles: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      const { id, title, description } = action.payload;
      return {
        ...state,
        posts: [...state.posts, { ...action.payload, comments: [] }],
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
        titles: state.titles.map(t => {
          if (t.id === id) {
            return { ...t, title, description };
          }
          return t;
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
                  ...action.payload.comment
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
      return {
        ...state,
        posts: [...state.posts, ...action.payload.posts]
      };

    case GET_ALL_TITLES:
      return {
        ...state,
        titles: [...state.titles, ...action.payload.titles]
      };

    case UPVOTE:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              votes: post.votes + 1
            };
          }
          return post;
        }),
        titles: state.titles.map(post => {
          if (+post.id === +action.payload.id) {
            return {
              ...post,
              votes: post.votes + 1
            };
          }
          return post;
        })
      };

    case DOWNVOTE:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (+post.id === +action.payload.id) {
            return {
              ...post,
              votes: post.votes - 1
            };
          }
          return post;
        }),
        titles: state.titles.map(post => {
          if (+post.id === +action.payload.id) {
            return {
              ...post,
              votes: post.votes - 1
            };
          }
          return post;
        })
      };

    default:
      return state;
  }
}

export default rootReducer;
