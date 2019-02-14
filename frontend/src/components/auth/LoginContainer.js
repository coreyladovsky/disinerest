import { connect } from "react-redux";
import Login from './Login';
import {
  login,
  signup,
  clearErrors,
  getUser
} from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    getUser: () => dispatch(getUser()),
    clearError: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Login);
