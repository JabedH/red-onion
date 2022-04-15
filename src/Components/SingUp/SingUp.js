import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./SingUp.css";

const SingUp = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Form className="w-25 mx-auto text-start">
        <input className="w-100" type="text" placeholder="Enter Name" />
        <input className="w-100 mt-3" type="email" placeholder="Enter email" />
        <input className="w-100 mt-3" type="password" placeholder="Password" />
        <input
          className="w-100 mt-3"
          type="password"
          placeholder="Confirm Password"
        />
        <button className="w-100 btn-color mt-3" type="submit">
          Submit
        </button>
        <div className="mt-2 text-center ">
          <Link
            onClick={navigateLogin}
            to="/login"
            className="text-decoration-none  "
          >
            Already you have an account?
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SingUp;
