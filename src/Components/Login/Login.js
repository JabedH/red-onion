import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  let ErrorElement;

  let from = location.state?.from?.pathname || "/";

  if (error) {
    ErrorElement = (
      <div>
        <p>Error: {error?.message}</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  const navigateLogin = () => {
    navigate("/SignOut");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="w-25 mx-auto text-start">
        <input
          ref={emailRef}
          name="email"
          className="w-100 mt-3"
          type="email"
          placeholder="Enter email"
          required
        />
        <input
          ref={passwordRef}
          name="password"
          className="w-100 mt-3"
          type="password"
          placeholder="Password"
          required
        />
        {ErrorElement}
        <button className="w-100 btn-color mt-3" type="submit">
          Submit
        </button>
        <div className="mt-3 text-center">
          <Link
            onClick={navigateLogin}
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
