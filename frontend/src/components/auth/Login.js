import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import Authenticate from "../../util/auth_util";
import { useInput } from "../../util/customHooks";
import { login, checkAuthenticateStatus } from "../../actions/session_actions";
import "../../css/SignUp.css";

const Login = () => {
  const email = useInput("");
  const password = useInput("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticateStatus);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(login({ email: email.value, password: password.value }));
    Authenticate.authenticateUser(email.value);
  };

  const demoLogin = async () => {
    await dispatch(
      login({ email: "guestdemo@gmail.com", password: "guestdemo" })
    );
    Authenticate.authenticateUser("guestdemo@gmail.com");
  };

  return (
    <div className="SignUp">
      <Link to="/signup">
        {" "}
        <button className="Login">Sign Up </button>
      </Link>
      <div className="SignUp-Background">
        <div>
          <img src={logo} alt="logo" />{" "}
        </div>
        <h1>Welcome Back!</h1>
        <div className="text">Enjoy your free dinterest account</div>
        <form onSubmit={handleSubmit}>
          <input id="email" type="text" placeholder="Email" {...email} />
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            {...password}
          />
          <button type="submit">Log in</button>
          <button type="button" onClick={demoLogin}>
            Demo Log in
          </button>
        </form>
        <div className="already-a-member">
          <Link to="/signup">Need an accout? Sign up now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
