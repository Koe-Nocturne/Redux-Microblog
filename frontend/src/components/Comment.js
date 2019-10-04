import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteComment(this.props.postId, this.props.comment.id)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDelete}>
          <i className="fas fa-eraser"></i>
        </button>
        <p>{this.props.comment.text}</p>
      </div>
    );
  }
}

export default Comment;