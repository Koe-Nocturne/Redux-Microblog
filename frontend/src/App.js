import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

class App extends React.Component {


  async componentDidMount() {
    await this.props.getAllTitlesFromAPI();
    await this.props.getAllPostsFromAPI(this.props.titles);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
