import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./FoodMenu.css";
import CustomLink from "../../CustomLink/CustomLink";

const FoodMenu = () => {
  return (
    <div className="FoodMenu px-16 py-6 w-full ">
      <nav className="d-flex justify-content-center mb-5">
        <CustomLink to="/Breakfast">Breakfast</CustomLink>

        <CustomLink to="/Lunch">Lunch</CustomLink>
        <CustomLink to="/Dinner">Dinner</CustomLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default FoodMenu;
