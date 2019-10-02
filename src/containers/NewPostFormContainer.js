import { connect } from 'react-redux';
import { addPost } from '../actions';
import NewPostForm from '../components/NewPostForm';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { addPost })(NewPostForm);