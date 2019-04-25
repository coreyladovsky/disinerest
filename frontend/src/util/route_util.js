import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import Authenticate from "./auth_util";

const Auth = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      path={path}
      render={props => {
        return !loggedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};
const Protected = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      path={path}
      render={props => {
        return loggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

const mapStateToProps = state => {
  return { loggedIn: Authenticate.isUserAuthenticated() };
};

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);
export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);
// const HideAuth = ({ component: Component, path, loggedIn }) => (
//   <Route
//     path={path}
//     render={props => {
//       return loggedIn ? <Component {...props} /> : null;
//     }}
//   />
// );
// export const HideAuthRoute = withRouter(
//   connect(
//     mapStateToProps,
//     null
//   )(HideAuth)
// );
