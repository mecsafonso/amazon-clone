import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login_container">
        <h1> Sign-In </h1>
        <form>
          <h5> E-mail</h5>
          <input type="text" />
          <h5> Password</h5>
          <input type="password" />
          <button className="login_continueButton"> Continue </button>
        </form>

        <p>
          {" "}
          By continuing, you agree to Amazon (clone)'s Conditions of Use and
          Privacy Notice.{" "}
        </p>
      </div>

      <p> New to amazon? </p>
      <button className="login_registerButton">
        {" "}
        Create your Amazon account{" "}
      </button>
    </div>
  );
}

export default Login;
