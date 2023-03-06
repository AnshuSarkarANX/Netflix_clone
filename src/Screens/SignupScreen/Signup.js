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
      </form>
    </div>
  );
}

export default SignIn;
