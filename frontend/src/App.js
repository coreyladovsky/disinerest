import React, { useEffect, useState } from "react";
import { checkAuthenticateStatus } from "./actions/session_actions";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from './util/route_util';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import PinsShow from './components/pins/PinsShow';
import PinsBuilder from './components/pins/PinsBuilder';
import UserShow from './components/users/UserShow';
import { useDispatch } from 'react-redux';

function App () {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticateStatus()).then(res => {
        setUser(res);
    })
  }, [])

  const location = useLocation();
  const style = location.pathname === "/login" || location.pathname === "/signup" ? "App" : ""

  if(user === null ) return <div>Loading...</div>
    return (
      <div className={style}>
 
          <ProtectedRoute path="/">
            <NavBar />
          </ProtectedRoute>

          <Route exact path={["/","/signup", "/login"]}>
            <Home/>
          </Route>

          <AuthRoute path="/signup">
            <SignUp/>
          </AuthRoute>

          <AuthRoute path="/login">
            <Login/>
          </AuthRoute>

        <ProtectedRoute path="/pins/:id" >
          <PinsShow />
        </ProtectedRoute>

        <ProtectedRoute path="/pins/pin-builder">
          <PinsBuilder/>
        </ProtectedRoute>

        <ProtectedRoute path="/users/:id">
          <UserShow/>
        </ProtectedRoute>
      </div>
    );

}
export default App;
