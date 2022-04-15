import React from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const navigateLogout = () => {
    navigate("/login");
  };
  return (
    <div>
      <Form className="w-25 mx-auto text-start">
        <input className="w-100 mt-3" type="email" placeholder="Enter email" />
        <input className="w-100 mt-3" type="password" placeholder="Password" />

        <button className="w-100 btn-color mt-3" type="submit">
          Submit
        </button>
        <div className="mt-3 text-center">
          <Link
            onClick={navigateLogout}
            to="/SingUp"
            className="text-decoration-none  "
          >
            Already you have an account?
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
