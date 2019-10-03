import { connect } from 'react-redux';
import { editPost } from '../actions';
import NewPostForm from '../components/NewPostForm';

export default connect(undefined, { editPost })(NewPostForm);