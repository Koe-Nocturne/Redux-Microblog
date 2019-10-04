import { connect } from 'react-redux';
import { editPostFromAPI } from '../actions';
import NewPostForm from '../components/NewPostForm';

export default connect(undefined, { editPostFromAPI })(NewPostForm);