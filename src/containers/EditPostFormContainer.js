import { connect } from 'react-redux';
import { editPost } from '../actions';
import NewPostForm from '../components/NewPostForm';

function mapStateToProps(state, ownProps) {
  return {
    post: ownProps.post
  };
}

export default connect(mapStateToProps, { editPost })(NewPostForm);