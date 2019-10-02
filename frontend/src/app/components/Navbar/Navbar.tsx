import * as React from "react";
import { Component } from "react";
import "./style.scss";

export interface Props {}

export interface State {}

class Navbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="logo-box">
            <div className="menu-button"></div>
            <span className="logo">UNShop</span>
          </div>
          <div className="search-box">
            <input className="search-bar" type="text" placeholder="Buscar..." />
          </div>
          <div className="profile">
            <span className="profile-name">Carolina Ruiz</span>
            <img
              className="profile-pic"
              src="./images/profile_img.jpg"
              alt="img"
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
