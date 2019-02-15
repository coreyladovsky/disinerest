import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getUser } from "./actions/session_actions";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from './util/route_util';
import SignUpContainer from './components/auth/SignUpContainer';
import LoginContainer from './components/auth/LoginContainer';
import HomeContainer from './components/HomeContainer';
import PinsShow from './components/pins/PinsShow';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path={["/","/signup", "/login"]} component={HomeContainer} />
          <AuthRoute path="/signup" component={SignUpContainer} />
          <AuthRoute path="/login" component={LoginContainer} />
          <ProtectedRoute path="/pins" component={PinsShow} />
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
