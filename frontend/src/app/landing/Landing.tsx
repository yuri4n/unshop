import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Categories/Categories";
import Trending from "../components/Trending/Trending";
import FixedButton from "../components/Shopping/FixedButton";

export interface Props {}

const Landing: React.SFC<Props> = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Trending />
      <FixedButton />
    </div>
  );
};

export default Landing;
