import * as UsersApiUtil from "../util/users_api_util";
import { receiveErrors, RECEIVE_ERRORS } from "./session_actions";

export const RECEIVE_USER = "RECEIVE_USER";

export const receieUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = userId => dispatch => {
  return UsersApiUtil.fetchUser(userId)
    .then(res => {
      return dispatch(receieUser(res.data.user));
    })
    .catch(err => dispatch(receiveErrors(err.response)));
};
