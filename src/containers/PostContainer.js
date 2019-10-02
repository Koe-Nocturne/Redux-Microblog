import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions';
import PostList from '../components/PostList';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { deletePost, editPost })(PostList);