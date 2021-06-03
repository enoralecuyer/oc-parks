import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Emoji from "./Emoji";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="logo">
              <Emoji symbol="🏞️" label="national park" /> SoCal Parks
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav " : "nav-links"}
            hide={this.state.isOpen}
          >
            <li>
              <Link to="/parks">
                <Emoji symbol="🌄" label="sunrise" /> All Parks
              </Link>
            </li>
            <li>
              <Link to="/about">
                <Emoji symbol="😊" label="smile" /> About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
