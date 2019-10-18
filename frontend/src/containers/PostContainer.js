import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deletePostFromAPI, editPostFromAPI, upVoteFromAPI, downVoteFromAPI } from '../actions';
import Post from '../components/Post';

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params;
  const post = state.posts.find(p => +id === p.id);
  return {
    post
  };
}

export default withRouter(connect(mapStateToProps, { deletePostFromAPI, editPostFromAPI, upVoteFromAPI, downVoteFromAPI })(Post));