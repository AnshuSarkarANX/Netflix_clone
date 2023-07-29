import { React, useState } from "react";
import { auth } from "../../firebase";
import { signInAnonymously } from "firebase/auth";
import "./LoginScreen.css";
import SignIn from "../SignupScreen/Signup.js";

function LoginScreen() {
  const [Signin, setSignin] = useState(false);

  return (
    <div className="LoginScreen">
      <div className="LoginScreen_background">
        <img
          className="LoginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427"
          alt="logo"
        />
        <button onClick={() => setSignin(true)} className="SignupButton">
          Sign Up
        </button>
        <div className="LoginScreen_body">
          {Signin ? (
            <SignIn />
          ) : (
            <>
              <h1 className="">Unlimited movies, TV shows and more.</h1>
              <h2 className="">Watch anywhere. Cancel anytime.</h2>
              <p className="">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="LoginScreen_input">
                <form>
                  <input type="email" placeholder="Email address"></input>
                </form>
                <button
                  onClick={() => setSignin(true)}
                  className="LoginScreen_Getstarted"
                >
                  Get Started
                </button>
              </div>
              <div className="skipButton">
                <button
                  className="LoginScreen_Skip"
                  onClick={() => signInAnonymously(auth)}
                >
                  Skip To Homepage
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default LoginScreen;
