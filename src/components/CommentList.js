import React from "react";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

class CommentList extends React.Component {
  render() {
    console.log(this.props.comments);
    const comments = this.props.comments.map(comment => (
      <Comment postId={this.props.id} comment={comment} />
    ));
    return (
      <div>
        {comments}
        <NewCommentForm id={this.props.id} addComment={this.props.addComment} />
      </div>
    );
  }
}

export default CommentList;
