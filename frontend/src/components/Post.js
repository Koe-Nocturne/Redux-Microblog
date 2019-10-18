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
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleToggle() {
    this.setState({ notEdit: false });
  }

  handleDelete() {
    this.props.deletePostFromAPI(this.props.match.params.id);
    this.props.history.push("/");
  }

  async handleUpVote() {
    await this.props.upVoteFromAPI(this.props.post.id);
  }
  async handleDownVote() {
    await this.props.downVoteFromAPI(this.props.post.id);
  }

  render() {
    const { id } = this.props.match.params;
    const { post } = this.props;

    // If there is no post redirect to home page
    if (!post) return <Redirect to="/" />;

    // If the state value of notEdit is true show the post
    // else render the editPostForm
    const Body = this.state.notEdit ? (
      <div className="container-fluid mx-3">
        <h2>{post.title}</h2>
        <button onClick={this.handleToggle}>
          <i className="fas fa-edit"></i>
        </button>{" "}
        <button onClick={this.handleDelete}>
          <i className="fas fa-eraser"></i>
        </button>
        <span>{post.votes} votes:</span>
        <button onClick={this.handleUpVote}>
          <i className="fas fa-arrow-up"></i>
        </button>
        <button onClick={this.handleDownVote}>
          <i className="fas fa-arrow-down"></i>
        </button>
        <p>{post.description}</p>
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
