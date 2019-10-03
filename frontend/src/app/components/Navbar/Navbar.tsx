import * as React from "react";
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
            <img
              className="menu-icon"
              src="./images/icons/menu-icon.jpg"
              alt=""
            />
            <span className="logo">UNShop</span>
          </div>
          <div className="search-box">
            <div className="input-div">
              <input
                className="search-bar"
                type="search"
                placeholder="Buscar..."
              />
            </div>
          </div>
          <div className="profile">
            <img className="drop" src="./images/icons/drop.svg" alt="" />
            <span className="profile-name">Carolina Ruiz</span>
            <img
              className="profile-pic"
              src="./images/pics/profile_img.jpg"
              alt="img"
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
