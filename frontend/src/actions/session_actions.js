import * as SessionApiUtil from "../util/session_api_util";
import Authenticate from "../util/auth_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const NEXT_PAGE = "NEXT_PAGE";
export const CLEAR_PAGE = "ClEAR_PAGE";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const getUser = () => dispatch => {
  return SessionApiUtil.getUser()
    .then(usr => {
      return dispatch(receiveCurrentUser(usr.data.user));
    })
    .catch(err => {
      return dispatch(receiveErrors(err.response));
    });
};

export const login = user => dispatch =>
  SessionApiUtil.login(user)
    .then(usr => {
      return dispatch(receiveCurrentUser(usr.data));
    })
    .catch(errors => dispatch(receiveErrors(errors.response)));

export const logout = () => dispatch =>
  SessionApiUtil.logout().then(() => {
    Authenticate.deauthenticateUser();
    return dispatch(receiveCurrentUser(null));
  });

export const signup = user => dispatch =>
  SessionApiUtil.signUp(user)
    .then(usr => {
      return dispatch(receiveCurrentUser(usr.data.user));
    })
    .catch(errors => dispatch(receiveErrors(errors.response)));

export const checkAuthenticateStatus = () => dispatch => {
  SessionApiUtil.getUser().then(user => {
    if (user.data.user.email === Authenticate.getToken()) {
      return dispatch(receiveCurrentUser(user.data.user));
    } else {
      if (user.data.email) {
        logout();
      } else {
        Authenticate.deauthenticateUser();
      }
    }
  });
};
