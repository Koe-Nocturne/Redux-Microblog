Redux Microblog
===============
 Created by Jennifer and Jon

Microblog is an exercise in using redux. I enjoyed working on this project and learning how to use context and store. I found rendering containers to be a nice way to avoid prop drilling through multiple components.
 
My code highlight is this snippet below. I’m so happy to get the ability to toggle between the post and the edit post. I also can see very clearly what I would do differently with this piece of code. I can instantly think of experimenting with React Hooks here. the file is located at frontend/src/components/Post.js 


```javascript 
...
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notEdit: true
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleToggle() {
    this.setState({ notEdit: false });
  }

  handleDelete() {
    this.props.deletePostFromAPI(this.props.match.params.id);
    this.props.history.push("/");
  }

  async handleUpVote() {
    await this.props.upVoteFromAPI(this.props.post.id);
  }
  async handleDownVote() {
    await this.props.downVoteFromAPI(this.props.post.id);
  }

  render() {
    const { id } = this.props.match.params;
    const { post } = this.props;

    // If there is no post redirect to home page
    if (!post) return <Redirect to="/" />;

    // If the state value of notEdit is true show the post
    // else render the editPostForm
    const Body = this.state.notEdit ? (
      <div className="container-fluid mx-3">
        <h2>{post.title}</h2>
        <button onClick={this.handleToggle}>
          <i className="fas fa-edit"></i>
        </button>{" "}
        <button onClick={this.handleDelete}>
          <i className="fas fa-eraser"></i>
        </button>
        <span>{post.votes} votes:</span>
        <button onClick={this.handleUpVote}>
          <i className="fas fa-arrow-up"></i>
        </button>
        <button onClick={this.handleDownVote}>
          <i className="fas fa-arrow-down"></i>
        </button>
        <p>{post.description}</p>
        <p>{post.body}</p>
        <CommentListContainer id={id} comments={post.comments} />
      </div>
    ) : (
      <EditPostFormContainer post={post} />
    );

    return <div className="container-fluid">{Body}</div>;
  }
}

export default withRouter(Post);
.
```

## ToDos
I have not finished with react-microblog and would like to continue working on it
- [ ] Make tests
- [ ] Refactor Redux with React Hooks
- [ ] Improve CSS on post detail page
- [ ] Improve CSS overall

## Fun Expierments
- [ ] Incorperate SASS


## How to start the project

To get the project running in development mode you will need to start up the back end then start up the front end. You will need two terminal tabs.

### Start the back end

To start the back end use the first tab to: 
1. Change directory to backend. 
2. `Nodemon server.js`

This will start the server on localhost:5000

### start the front end

To start the front end use the second tab to:
1. Change directory to frontend
2. `npm i`
3. `npm start`

This will start the server on localhost:3000

## Available Scripts


### `npm test`

No tests are written at this point if they were you would run the code.
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify