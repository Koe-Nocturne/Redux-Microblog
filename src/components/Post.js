import React from 'react';
import EditPostFormContainer from '../containers/EditPostFormContainer';
import { withRouter, Redirect } from 'react-router-dom';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notEdit: true
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };

  handleToggle() {
    this.setState({notEdit: false});
  };

  handleDelete() {
    this.props.deletePost(this.props.match.params.id)
    this.props.history.push('/')
  }

  render() {
    const { id } = this.props.match.params;
    const post = this.props.posts.find(p => +id === p.id);

    if (!post) return <Redirect to='/' />

    const Body = this.state.notEdit ? <div>
      <h2>{post.title}</h2>
      <button onClick={this.handleToggle}><i className="fas fa-edit"></i></button> <button onClick={this.handleDelete}><i className="fas fa-eraser"></i></button>
      <i>{post.description}</i>
      <p>{post.body}</p>
    </div>
      : <EditPostFormContainer post={post} />;

    return (
      <div>
        {Body}
      </div>
    )
  }
}

export default withRouter(Post);