import React from "react";
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class NewPostForm extends React.Component {
  static defaultProps = {
    post: {
      title: "",
      description: "",
      body: ""
    }
  };
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.post.title,
      description: this.props.post.description,
      body: this.props.post.body
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //eventually will be async/await
  async handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.addPostFromAPI) {
      await this.props.addPostFromAPI(this.state);
    } else {
      this.props.editPostFromAPI({...this.state, id: this.props.post.id});
    }
    this.goHome();
  }
  
  goHome() {
    this.props.history.push("/");
  };

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
        <Button onClick={this.goHome}>Cancel</Button>
      </div>
    );
  }
}

export default withRouter(NewPostForm);
