import React, { Component } from "react";
import PostCard from './PostCard'

class PostList extends Component {
  //call getallposts

  render() {
    const { titles } = this.props;
    
    let postCards = titles.map(post => (
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