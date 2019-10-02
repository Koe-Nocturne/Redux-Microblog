import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class NewPostForm extends React.Component {
  static defaultProps = {
    title: "",
    description: "",
    body: ""
  };
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      description: this.props.description,
      body: this.props.body
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //eventually will be async/await
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleAdd(this.state);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="body">Body</Label>
            <Input
              type="textarea"
              name="body"
              id="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Save</Button>
        </Form>
        <Button>Cancel</Button>
      </div>
    );
  }
}

export default withRouter(NewPostForm);
