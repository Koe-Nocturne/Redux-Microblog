import { connect } from 'react-redux';
import { getAllTitlesFromAPI, getAllPostsFromAPI } from '../actions';
import App from '../App';

function mapStateToProps(state) {
  return {
    titles: state.titles
  };
}

export default connect(mapStateToProps, { getAllTitlesFromAPI, getAllPostsFromAPI })(App);