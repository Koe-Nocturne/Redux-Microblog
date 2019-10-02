import React from "react";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

class PostCard extends React.Component{
  render() {
    return(
      <Card>
        <CardBody>
          <CardTitle>
            Title Title
          </CardTitle>
          <CardText>
            Text Text
          </CardText>
        </CardBody>
      </Card>
    )
  }
}

export default PostCard;