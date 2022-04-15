import React from "react";
import "./FoodMenu.css";
import CustomLink from "../../CustomLink/CustomLink";

const FoodMenu = () => {
  return (
    <div className="FoodMenu">
      <CustomLink to="/Breakfast">Breakfast</CustomLink>

      <CustomLink className="link" to="/Lunch">
        Lunch
      </CustomLink>
      <CustomLink className="link" to="/Dinner">
        Dinner
      </CustomLink>
      {/* <Link to="/Breakfast">Breakfast</Link>
      <Link to="/Lunch">Lunch</Link>
      <Link to="/Dinner">Dinner</Link> */}
    </div>
  );
};

export default FoodMenu;
