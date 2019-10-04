import React, { Component } from "react";
import PostListContainer from "../containers/PostListContainer";

class Home extends Component {
  render() {
    return (
      <section className="container">
        <p>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway
        </p>
        <PostListContainer />
      </section>
    );
  }
}

export default Home;
