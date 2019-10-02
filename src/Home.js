import React, { Component } from "react";
import PostList from "./components/PostList";

class Home extends Component {
  render() {
    return (
      <section className="container">
        <p>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway
        </p>
        <PostList />
      </section>
    );
  }
}

export default Home;
