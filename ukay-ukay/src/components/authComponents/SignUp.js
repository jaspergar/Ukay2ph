import React, { useState } from "react";
import logo from "../../images/logo.png";
import "../../css/SignUp.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //if successful create a new user with email and password
        // console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signup">
      <div className="signup__container">
        <Link to="/">
          <div className="signup__logocontainer">
            <img src={logo} className="signup__logo" />
            <h1>UKAY2PH</h1>
          </div>
        </Link>
        <div className="signup__formcontainer">
          <h1>Sign-up</h1>
          <form action="" className="signup__form">
            <label htmlFor="name" className="signup__labelpassword">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="signup__input"
            />

            <label htmlFor="email" className="signup__labelemail">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup__input"
            />

            <label htmlFor="password" className="signup__labelpassword">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup__input"
              placeholder="At least 6 characters"
            />

            <label htmlFor="cpassword" className="signup__labelpassword">
              Re-enter password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={cpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="signup__input"
            />

            <button
              type="submit"
              onClick={signUp}
              className="signup__signupbutton"
            >
              Sign-up
            </button>
          </form>
          <p className="signup__conditions">
            By creating an account, you agree to Ukay2PH's Conditions of Use and
            Privacy Notice.
          </p>
        </div>

        <p className="signup__new">
          Already have an account?{" "}
          <Link to="/signin" className="signup__link">
            <span>Sign-in</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
