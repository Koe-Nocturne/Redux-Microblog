import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, Jumbotron } from "reactstrap";

class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Jumbotron>
          <h1 className="display-3">Microblog</h1>
          <p className="lead">Get into the Rithm of blogging</p>
          <Navbar className="row" expand="md">
            <Nav className="lead col-float-left" navbar>
              <NavLink exact to="/">
                Blog
              </NavLink>
            </Nav>

            <Nav className="lead col-float-left ml-4" navbar>
              <NavItem>
                <NavLink to="/new/">
                  Add a New Post
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Jumbotron>
      </div>
    );
  }
}

export default NavBar;
