import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

class NewCommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //eventually will be async/await
  async handleSubmit(evt) {
    evt.preventDefault();
    await this.props.addComment(this.props.id, this.state);
    this.setState({ text: "" })
  }
  
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="text"
              id="text"
              placeholder="New Comment"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Add</Button>
        </Form>
      </div>
    );
  }
}

export default NewCommentForm;