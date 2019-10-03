import React, { Component } from "react";
import PostCard from './PostCard'

class PostList extends Component {
  render() {
    const { posts } = this.props;
    
    let postCards = posts.map(post => (
      <PostCard key={post.id} post={post} />
    ));

    return (
      <div>
        {postCards}
      </div>
    )
  }
}

export default PostList;