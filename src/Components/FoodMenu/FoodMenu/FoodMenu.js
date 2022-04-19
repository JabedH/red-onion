import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./FoodMenu.css";
import CustomLink from "../../CustomLink/CustomLink";

const FoodMenu = () => {
  const navigate = useNavigate();
  const checkoutFood = () => {
    navigate("/CheckOut");
  };
  return (
    <div className="FoodMenu px-16 py-6 w-full ">
      <nav className="d-flex justify-content-center mb-5">
        <CustomLink to="/Breakfast">Breakfast</CustomLink>

        <CustomLink to="/Lunch">Lunch</CustomLink>
        <CustomLink to="/Dinner">Dinner</CustomLink>
      </nav>
      <Outlet />
      <button onClick={checkoutFood} className="border-0 mt-5 mb-5 food-btn">
        CheckOut Your Food
      </button>
    </div>
  );
};

export default FoodMenu;
