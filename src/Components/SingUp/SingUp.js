import React from "react";
import { Button, Form } from "react-bootstrap";
import "./SingUp.css";

const SingUp = () => {
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
        <p className="text-center mt-3">Already you have an account?</p>
      </Form>
    </div>
  );
};

export default SingUp;
