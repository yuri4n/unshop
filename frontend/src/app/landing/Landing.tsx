import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Categories/Categories";
import Trending from "../components/Trending/Trending";

export interface Props {}

const Landing: React.SFC<Props> = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Trending />
    </div>
  );
};

export default Landing;
