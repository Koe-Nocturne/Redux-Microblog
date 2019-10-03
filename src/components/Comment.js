import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    // this.props.deleteComment(); //will need comment id as param as well as this.props.postId
  }

  render() {
    return (
      <div>
        <button>
          <i className="fas fa-eraser"></i>
        </button>
        <p>{this.props.comment.comment}</p>
      </div>
    );
  }
}

export default Comment;