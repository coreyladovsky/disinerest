import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { useInput } from '../../util/customHooks';
import logo from "../../assets/logo.png"
import '../../css/SignUp.css';
import Authenticate from '../../util/auth_util';
import { useDispatch } from 'react-redux';
import {
  login,
  signup,
} from "../../actions/session_actions";

const SignUp = () => {
  const  email = useInput("");
  const  password = useInput("");
  const  age = useInput("");
  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signup({email: email.value, password: password.value, age: age.value}))
    Authenticate.authenticateUser(email);
    await dispatch(login({email, password}))
    history.push('/')
  }
    return (
      <div className="SignUp">
        <Link to="/login" >  <button  className="Login"> Log in </button></Link>
      <div className="SignUp-Background">
        <div><img src={logo} alt="logo" /> </div>
          <h1>Sign up to see more</h1>
          <div className="text">
          Access dinterest's best ideas with a free account
          </div>
          <form onSubmit={handleSubmit}>
            <input id="email" type="text" placeholder="Email" {...email} />
            <input id="password" type="password" placeholder="Create a password" {...password} />
            <input id="age" type="text" placeholder="Age" {...age}  />
            <button type="submit">Sign Up</button>
          </form>
          <div className="already-a-member">
              <Link to="/login" >Already a member? Log in</Link>
          </div>
        </div>
      </div>
    );
  }

  export default SignUp;
