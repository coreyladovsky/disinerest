import React, { useEffect } from "react";
import "./App.css";
import { getUser, checkAuthenticateStatus } from "./actions/session_actions";
import { BrowserRouter, Route } from "react-router-dom";
import { HideAuthRoute, AuthRoute, ProtectedRoute } from './util/route_util';
import SignUpContainer from './components/auth/SignUpContainer';
import Login from './components/auth/Login';
import HomeContainer from './components/HomeContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import PinsShow from './components/pins/PinsShow';
import PinsBuilderContainer from './components/pins/PinsBuilderContainer';
import UserShowContainer from './components/users/UserShowContainer';
import { useDispatch } from 'react-redux';

function App () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthenticateStatus())
  }, [])
    return (
      <BrowserRouter>
        <div className="App">
          <ProtectedRoute path="/" component={NavBarContainer} />
          <Route exact path={["/","/signup", "/login"]} component={HomeContainer} />
          <AuthRoute path="/signup" component={SignUpContainer} />
          <AuthRoute path="/login" component={Login} />
        <ProtectedRoute path="/pins/:id" component={PinsShow} />
        <ProtectedRoute path="/pins/pin-builder" component={PinsBuilderContainer} />
        <ProtectedRoute path="/users/:id" component={UserShowContainer} />
        </div>
      </BrowserRouter>
    );

}
export default App; 
// const mapStateToProps = state => {
//   return{}
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     getUser: () => dispatch(getUser()),
//     checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus())
//   };
// };
//
// export default connect(
//   null,
//   mapDispatchToProps
// )(App);
