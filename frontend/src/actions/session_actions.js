import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const getUser = () => dispatch =>{
    return SessionApiUtil.getUser().then(
    usr => {
      return dispatch(receiveCurrentUser(usr.data.user))
    }
  )
  .catch(err => {
    debugger
  })
}
