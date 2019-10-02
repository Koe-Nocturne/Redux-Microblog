import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
// import PostContext from "./postContext";

class App extends React.Component {
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
