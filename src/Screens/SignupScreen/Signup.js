import React from "react";
import "./Signup.css";

function SignIn() {
  return (
    <div className="SignIn_body">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button type="submit" name="submit">
          Submit
        </button>
        <h4>
          <span className="signUp_grey">New to Netflix? </span>
          <span className="signUp_link">Signup Now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
