import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getUser, checkAuthenticateStatus } from "./actions/session_actions";
import { BrowserRouter, Route } from "react-router-dom";
import { HideAuthRoute, AuthRoute, ProtectedRoute } from './util/route_util';
import SignUpContainer from './components/auth/SignUpContainer';
import LoginContainer from './components/auth/LoginContainer';
import HomeContainer from './components/HomeContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import PinsShowContainer from './components/pins/PinsShowContainer';
import PinsBuilderContainer from './components/pins/PinsBuilderContainer';

class App extends Component {
  componentDidMount() {
    this.props.checkAuthenticateStatus();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ProtectedRoute path="/" component={NavBarContainer} />
          <Route exact path={["/","/signup", "/login"]} component={HomeContainer} />
          <AuthRoute path="/signup" component={SignUpContainer} />
          <AuthRoute path="/login" component={LoginContainer} />
        <ProtectedRoute path="/pins/:id" component={PinsShowContainer} />
        <ProtectedRoute path="/pins/pin-builder" component={PinsBuilderContainer} />
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
    getUser: () => dispatch(getUser()),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
