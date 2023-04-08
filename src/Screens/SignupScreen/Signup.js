import React, { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import "./Signup.css";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="SignIn_body">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" name="submit" onClick={signIn}>
          Submit
        </button>
        <h4>
          <span className="signUp_grey">New to Netflix? </span>
          <span className="signUp_link" onClick={register}>
            Signup Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
