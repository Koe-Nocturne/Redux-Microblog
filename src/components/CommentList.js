import React from "react";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

class CommentList extends React.Component {
  render() {
    const comments = this.props.comments.map(comment => (
      <Comment postId={this.props.id} key={comment.id} comment={comment} deleteComment={this.props.deleteComment}/>
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
