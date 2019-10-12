import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Categories/Categories";
import Trending from "../components/Trending/Trending";
import Menu from "../components/Menu/Menu";

export interface Props {}

const Landing: React.SFC<Props> = () => {
  return (
    <div>
      {/* <Menu /> */}
      <Navbar />
      <Categories />
      <Trending />
    </div>
  );
};

export default Landing;
