import React, { Component } from "react";
import PostCard from "./PostCard";

class PostList extends Component {
  constructor(props) {
    super(props)
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote (id) {
    this.props.upVoteFromAPI(id)
  }

  handleDownVote(id) {
    this.props.downVoteFromAPI(id);
  }
  


  render() {
    const { titles } = this.props;

    const unsortedTitleCards = titles.map(post => (
      <PostCard
        key={post.id}
        post={post}
        upVote={this.handleUpVote}
        downVote={this.handleDownVote}
      />
    ));

    const sortedTitleCards = unsortedTitleCards.sort((a, b) => {
      return b.props.post.votes - a.props.post.votes;
    });
    console.log("re-rendered in post List", sortedTitleCards);


    return <div>{sortedTitleCards}</div>;
  }
}

export default PostList;
