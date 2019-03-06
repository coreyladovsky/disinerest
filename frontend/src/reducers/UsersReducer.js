import merge from "lodash/merge";
import { RECEIVE_USER } from "../actions/users_actions";


const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {[action.user.id]: action.user} );
    default:
      return oldState;
  }
};

export default UsersReducer;
