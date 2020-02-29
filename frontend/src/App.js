import React, { useEffect } from "react";
import "./App.css";
import { checkAuthenticateStatus } from "./actions/session_actions";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from './util/route_util';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import PinsShow from './components/pins/PinsShow';
import PinsBuilder from './components/pins/PinsBuilder';
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
          <ProtectedRoute path="/" component={NavBar} />
          <Route exact path={["/","/signup", "/login"]}>
            <Home/>
          </Route>
          <AuthRoute path="/signup" component={SignUp} />
          <AuthRoute path="/login" component={Login} />
        <ProtectedRoute path="/pins/:id" component={PinsShow} />
        <ProtectedRoute path="/pins/pin-builder" component={PinsBuilder} />
        <ProtectedRoute path="/users/:id" component={UserShowContainer} />
        </div>
      </BrowserRouter>
    );

}
export default App;
