import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import Authenticate from '../../util/auth_util';

import '../../css/SignUp.css';
class Login extends React.Component {
  state = { email: "", password: ""};

  componentDidMount() {
    this.props.checkAuthenticateStatus()
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.login(this.state)
    .then(
      () => {
        Authenticate.authenticateUser(this.state.email);
      }
    )
  }

  demoLogin = () => {
    this.props.login({email: "guestdemo@gmail.com", password: "guestdemo"})
    .then(
      () => {
        Authenticate.authenticateUser("guestdemo@gmail.com");
      }
    )
  }

  render() {
    let {email, password, age} = this.state;
    return (
      <div className="SignUp">
        <Link to="/signup" >  <button  className="Login">Sign Up </button></Link>
      <div className="SignUp-Background">
        <div><img src={logo} alt="logo" /> </div>
          <h1>Welcome Back!</h1>
          <div className="text">
          Enjoy your free dinterest account
          </div>
          <form onSubmit={this.handleSubmit}>
            <input id="email" type="text" placeholder="Email" value={email} onChange={this.handleChange} />
            <input id="password" type="password" placeholder="Create a password" value={password} onChange={this.handleChange}  />
            <button type="submit">Log in</button>
            <button type="button" onClick={this.demoLogin}>Demo Log in</button>
          </form>
          <div className="already-a-member">
              <Link to="/signup" >Need an accout? Sign up now</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
