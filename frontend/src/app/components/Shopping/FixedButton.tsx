import * as React from "react";
import "./styles.scss";

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Props {}

export interface State {}

class FixedButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <a href="/"></a>
        <div className="cart">
          <img src="./cart.svg" alt="Cart" />
        </div>
      </div>
    );
  }
}

export default FixedButton;
