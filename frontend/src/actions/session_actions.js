import * as SessionApiUtil from '../util/session_api_util';
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

export const getUser = () => dispatch =>{
    return SessionApiUtil.getUser().then(
    usr => {
      return dispatch(receiveCurrentUser(usr.data.user))
    }
  )
  .catch(err => {
    return dispatch(receiveErrors(err.response))
  })
}

export const login = user => dispatch =>
  SessionApiUtil.login(user).then(
    usr => dispatch(receiveCurrentUser(usr)),
    errors => dispatch(receiveErrors(errors.response))
  );

export const logout = () => dispatch =>
  SessionApiUtil.logout().then(() => dispatch(receiveCurrentUser(null)));

export const signup = user => dispatch =>
  SessionApiUtil.signUp(user).then(
    usr => dispatch(receiveCurrentUser(usr)),
    errors => dispatch(receiveErrors(errors.response))
  );
