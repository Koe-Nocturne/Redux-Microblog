import { connect } from 'react-redux';
import { addPostFromAPI } from '../actions';
import NewPostForm from '../components/NewPostForm';

export default connect(undefined, { addPostFromAPI })(NewPostForm);