import React, { Component } from "react";
import PostCard from './PostCard'

class PostList extends Component {
  render() {
    return (
      //map array of post to make postcards
      <div>
        <PostCard />
      </div>
    )
  }
}

export default PostList;