import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getUser } from "./actions/session_actions";
import { BrowserRouter, Route } from "react-router-dom";
import SignUpContainer from './components/auth/SignUpContainer';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/signup" component={SignUpContainer} />
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
