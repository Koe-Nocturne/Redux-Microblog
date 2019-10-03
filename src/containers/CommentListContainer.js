import { connect } from 'react-redux';
import { addComment } from '../actions';
import CommentList from '../components/CommentList';

function mapStateToProps(state, ownProps) {
  return {
    comments: ownProps.comments,
    id: ownProps.id
  };
}

export default connect(mapStateToProps, {addComment})(CommentList);