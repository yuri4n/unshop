import * as React from "react";
import "./styles.scss";

interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface Props {
    list: Item[],
}

export interface State {}

class FixedButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        list: props.list
    };
  }

  sendArray() {
    fetch("/api/orders", {
      method: "post",
      body: JSON.stringify(this.state.list)
    }).then().catch();
  }

  render() {
    return (
      <div>
        <div className="cart">
          <img src="./cart.svg" alt="Cart"/>
        </div>
      </div>
    );
  }
}

export default FixedButton;