import { connect } from 'react-redux';
import { addCommentFromAPI, deleteCommentFromAPI } from '../actions';
import CommentList from '../components/CommentList';

function mapStateToProps(state, ownProps) {
  console.log(ownProps)
  return {
    comments: ownProps.comments,
    id: ownProps.id
  };
}

export default connect(mapStateToProps, {addCommentFromAPI, deleteCommentFromAPI})(CommentList);