import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";

const FoodMenu = () => {
  return (
    <div className="FoodMenu">
      <Link to="/Breakfast">Breakfast</Link>
      <Link to="/Lunch">Lunch</Link>
      <Link to="/Dinner">Dinner</Link>
    </div>
  );
};

export default FoodMenu;
