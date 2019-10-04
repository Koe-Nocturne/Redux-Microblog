import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewPostFormContainer from '../containers/NewPostFormContainer';
import Home from './Home';
import PostContainer from '../containers/PostContainer';

class Routes extends React.Component {
  
  render() {
    return(
      <Switch>
        <Route exact path="/"
          render={() => <Home />}/>
        <Route exact path="/new/"
          render={() => <NewPostFormContainer />}/>
        <Route exact path="/:id"
          render={() => <PostContainer />}/>
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes;