import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./SingUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const SingUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const handleForm = (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const displayEmail = event.target.email.value;
    const displayPassword = event.target.password.value;
    // const ConfirmPassword = event.target.ConfirmPassword.value;
    createUserWithEmailAndPassword(displayEmail, displayPassword);
    navigate("/");
  };
  return (
    <div>
      <Form onSubmit={handleForm} className="w-25 mx-auto text-start">
        <input
          className="w-100"
          type="text"
          name="name"
          placeholder="Enter Name"
          required
        />
        <input
          className="w-100 mt-3"
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <input
          className="w-100 mt-3"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        {/* <input
          className="w-100 mt-3"
          type="password"
          name="ConfirmPassword"
          placeholder="ConfirmPassword"
        /> */}
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
