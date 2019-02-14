import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getUser } from "./actions/session_actions";
import { BrowserRouter, Route } from "react-router-dom";
import SignUpContainer from './components/auth/SignUpContainer';
import LoginContainer from './components/auth/LoginContainer';
import HomeContainer from './components/HomeContainer';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path={["/","/signup", "/login"]} component={HomeContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/login" component={LoginContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

// const mapStateToProps = state => {
//   return{}
// }
const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
