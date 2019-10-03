import * as React from "react";
import "./styles.scss";

export interface Props {}

export interface State {}

class Trending extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="trend-title-box">
          <img
            className="trend-icon"
            src="./images/icons/trending.svg"
            alt=""
          />
          <span className="trend-title">Tendencias</span>
        </div>
      </div>
    );
  }
}

export default Trending;
