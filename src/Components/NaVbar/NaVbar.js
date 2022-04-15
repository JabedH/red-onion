import React from "react";
import "./NaVbar.css";
import logo from "../../img/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NaVbar = () => {
  return (
    <div className="d-flex justify-content-between navbar container">
      <img src={logo} alt="" />
      <div className=" navbar-item">
        <FontAwesomeIcon icon={faCartShopping} />
        <button type="button">LogIn</button>
        <button type="butyon">Sign up</button>
      </div>
    </div>
  );
};

export default NaVbar;
