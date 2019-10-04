import React from "react";
import EditPostFormContainer from "../containers/EditPostFormContainer";
import { withRouter, Redirect } from "react-router-dom";
import CommentListContainer from "../containers/CommentListContainer";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notEdit: true
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleToggle() {
    this.setState({ notEdit: false });
  }

  handleDelete() {
    this.props.deletePostFromAPI(this.props.match.params.id);
    this.props.history.push("/");
  }

  render() {
    const { id } = this.props.match.params;
    const { post } = this.props;
    if (!post) return <Redirect to="/" />;

    const Body = this.state.notEdit ? (
      <div className="container-fluid mx-3">
        <h2>{post.title}</h2>
        <button onClick={this.handleToggle}>
          <i className="fas fa-edit"></i>
        </button>{" "}
        <button onClick={this.handleDelete}>
          <i className="fas fa-eraser"></i>
        </button>
        <i>{post.description}</i>
        <p>{post.body}</p>
        <CommentListContainer id={id} comments={post.comments} />
      </div>
    ) : (
      <EditPostFormContainer post={post} />
    );

    return <div className="container-fluid">{Body}</div>;
  }
}

export default withRouter(Post);
