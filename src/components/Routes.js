import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import Home from '../Home';
import Post from './Post';

class Routes extends React.Component {
  
  render() {
    return(
      <Switch>
        <Route exact path="/"
          render={() => <Home />}/>
        <Route exact path="/new/"
          render={() => <NewPostForm />}/>
        <Route exact path="/:id"
          render={() => <Post />}/>
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes;