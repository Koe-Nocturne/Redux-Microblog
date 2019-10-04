import { connect } from 'react-redux';
import { addCommentFromAPI, deleteCommentFromAPI } from '../actions';
import CommentList from '../components/CommentList';



export default connect(undefined, {addCommentFromAPI, deleteCommentFromAPI})(CommentList);