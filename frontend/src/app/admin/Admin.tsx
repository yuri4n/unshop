import * as React from "react";

import Navbar from "../components/Navbar/Navbar";

export interface Props {}

export interface State {}

class Admin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <h1>Admin</h1>
      </div>
    );
  }
}

export default Admin;
