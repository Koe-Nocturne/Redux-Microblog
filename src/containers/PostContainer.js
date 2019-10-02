import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions';
import Post from '../components/Post';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { deletePost, editPost })(Post);