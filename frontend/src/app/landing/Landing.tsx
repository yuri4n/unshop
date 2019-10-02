import React, { Component } from "react";

import Navbar from "../components/Navbar/Navbar";

export interface Props {}

const Landing: React.SFC<Props> = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Landing;
