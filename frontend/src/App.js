import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getUser } from './actions/session_actions';

class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }
  render() {
    return (
      <div className="App">
        hello
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return{}
// }
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(null, mapDispatchToProps)(App);
