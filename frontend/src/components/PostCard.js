import React from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";

class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }
  async handleUpVote() {
    await this.props.upVote(this.props.post.id);
  }
  async handleDownVote() {
    await this.props.downVote(this.props.post.id);
  }

  render() {
    const { title, description, id, votes } = this.props.post;

    return (
      <Card className="col-4">
        <CardBody>
          <CardTitle>
            <Link to={`/${id}`}>{title}</Link>
          </CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <span>{votes} votes </span>
          <button onClick={this.handleUpVote}>
            <i className="fas fa-arrow-up"></i>
          </button>
          <button onClick={this.handleDownVote}>
            <i className="fas fa-arrow-down"></i>
          </button>
        </CardFooter>
      </Card>
    );
  }
}

export default PostCard;
