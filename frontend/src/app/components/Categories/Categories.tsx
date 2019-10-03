import * as React from "react";
import "./styles.scss";

export interface Props {}

export interface State {}

class Categories extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section className="card">
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
          <div className="card--content"></div>
        </section>
      </div>
    );
  }
}

export default Categories;
