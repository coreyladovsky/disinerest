import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import Authenticate from "./auth_util";

export const AuthRoute = ({ children, ...rest}) => {
  const loggedIn = useSelector((state) => state.session.currentUser)
    return <Route
      {...rest}
      render={({location}) => {
        return !loggedIn ? (children) : <Redirect to="/" />;
      }}
    />
}

export const ProtectedRoute = ({children, ...rest }) => {
  const loggedIn = useSelector((state) => state.session.currentUser)

    return <Route
      {...rest}
      render={({location}) => {
        return  loggedIn ? (children) : <Redirect to={"/login"}/>;
    }}
    />
}
