import React from "react";

class SignUp extends React.Component {
  state = { email: "", password: "", age: "" };

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state)
  }
  render() {
    let {email, password, age} = this.state;
    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>
          <input id="email" type="text" placeholder="Email" value={email} onChange={this.handleChange} />
          <input id="password" type="password" placeholder="Create a password" value={password} onChange={this.handleChange}  />
          <input id="age" type="text" placeholder="Age" value={age} onChange={this.handleChange}  />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
