import React from "react";

import FoodMenu from "../FoodMenu/FoodMenu/FoodMenu";

import Search from "../Search/Search";

const Home = () => {
  return (
    <div>
      <Search />
      <FoodMenu />
    </div>
  );
};

export default Home;
