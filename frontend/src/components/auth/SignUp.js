import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import '../../css/SignUp.css';
import Authenticate from '../../util/auth_util';
class SignUp extends React.Component {
  state = { email: "", password: "", age: "" };

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit = async (e) => {
    let { email, password } = this.state;
    e.preventDefault();
    let registration = await this.props.signup(this.state)
    Authenticate.authenticateUser(email);
    let loggedIn = await this.props.login({email, password})
    this.props.history.push('/pins')

  }
  render() {
    let {email, password, age} = this.state;
    return (
      <div className="SignUp">
        <Link to="/login" >  <button  className="Login"> Log in </button></Link>
      <div className="SignUp-Background">
        <div><img src={logo} alt="logo" /> </div>
          <h1>Sign up to see more</h1>
          <div className="text">
          Access dinterest's best ideas with a free account
          </div>
          <form onSubmit={this.handleSubmit}>
            <input id="email" type="text" placeholder="Email" value={email} onChange={this.handleChange} />
            <input id="password" type="password" placeholder="Create a password" value={password} onChange={this.handleChange}  />
            <input id="age" type="text" placeholder="Age" value={age} onChange={this.handleChange}  />
            <button type="submit">Sign Up</button>
          </form>
          <div className="already-a-member">
              <Link to="/login" >Already a member? Log in</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
