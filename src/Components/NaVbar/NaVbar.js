import React from "react";
import "./NaVbar.css";
import logo from "../../img/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

const NaVbar = () => {
  return (
    <div className="d-flex justify-content-between navbar container">
      <img src={logo} alt="" />
      <div className=" navbar-item">
        {/* <button type="button">LogIn</button> */}
        {/* <button type="button">Sign up</button> */}
        <Link to="Cart">
          <FontAwesomeIcon icon={faCartShopping} />{" "}
        </Link>
        <Link to="Login">LogIn</Link>
      </div>
    </div>
  );
};

export default NaVbar;
