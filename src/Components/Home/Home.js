import React from "react";
import Breakfast from "../FoodMenu/Breakfast/Breakfast";
import Dinner from "../FoodMenu/Dinner/Dinner";

import FoodMenu from "../FoodMenu/FoodMenu/FoodMenu";
import Lunch from "../FoodMenu/Lunch.js/Lunch";

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
