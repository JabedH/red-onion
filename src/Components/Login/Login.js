import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Form className="w-25 mx-auto text-start">
        <input className="w-100 mt-3" type="email" placeholder="Enter email" />
        <input className="w-100 mt-3" type="password" placeholder="Password" />

        <button className="w-100 btn-color mt-3" type="submit">
          Submit
        </button>
        <p className="text-center mt-3">Don't have an Account?</p>
      </Form>
    </div>
  );
};

export default Login;
