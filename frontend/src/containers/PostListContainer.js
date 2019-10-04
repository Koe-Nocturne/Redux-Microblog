import { connect } from 'react-redux';
import PostList from '../components/PostList';

function mapStateToProps(state) {
  console.log("postlistcontainer:", state)
  return {
    titles: state.titles
  };
}

//add get all post to dispatch
export default connect(mapStateToProps)(PostList);