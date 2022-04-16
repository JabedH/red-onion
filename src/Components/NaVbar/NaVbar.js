import React from "react";
import "./NaVbar.css";
import logo from "../../img/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Button } from "bootstrap";

const NaVbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="d-flex justify-content-between navbar container">
      <img as={Link} to="/" src={logo} alt="" />
      <div className=" navbar-item">
        {/* <button type="button">LogIn</button> */}
        {/* <button type="button">Sign up</button> */}
        <Link to="Cart">
          <FontAwesomeIcon icon={faCartShopping} />{" "}
        </Link>
        {user ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          <Link to="Login">LogIn</Link>
        )}
      </div>
    </div>
  );
};

export default NaVbar;
