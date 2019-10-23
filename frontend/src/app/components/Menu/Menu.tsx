import * as React from "react";
import "./style.scss";

export interface Props {}

export interface State {}

class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="menu">
        <div className="menu-logo-box">
          <img src="./images/icons/menu-icon.jpg" alt="" />
          <span className="menu-logo">UNShop</span>
        </div>
        <div className="links-box">
          <a className="menu-link" href="/">
            Inicio
          </a>
          <a className="menu-link" href="/categories">
            Categorías
          </a>
          <a className="menu-link" href="/admin">
            Administración
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
