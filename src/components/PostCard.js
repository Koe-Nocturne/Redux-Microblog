import React from "react";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

class PostCard extends React.Component{
  render() {
    const { title, description, id } = this.props.post;
    return(
      <Card className="col-4">
        <CardBody>
          <CardTitle>
            <Link to={`/${id}`}>{ title }</Link>
          </CardTitle>
          <CardText>
            { description }
          </CardText>
        </CardBody>
      </Card>
    )
  }
}

export default PostCard;