import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase.js";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    // firebase
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        history.push("/");
      }
    });
  };

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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5> Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submite"
            className="login_continueButton"
            onClick={signIn}
          >
            Continue{" "}
          </button>
        </form>

        <p>
          {" "}
          By continuing, you agree to Amazon (clone)'s Conditions of Use and
          Privacy Notice.{" "}
        </p>
      </div>

      <p> New to amazon? </p>
      <button onClick={register} className="login_registerButton">
        Create your Amazon account{" "}
      </button>
    </div>
  );
}

export default Login;
