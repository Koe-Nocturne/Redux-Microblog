import { connect } from 'react-redux';
// import { addPost, deletePost, editPost } from '../actions';
import PostList from '../components/PostList';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(PostList);