import { connect } from "react-redux";
import Login from './Login';
import {
  login,
  signup,
  clearErrors,
  getUser,
  checkAuthenticateStatus
} from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    getUser: () => dispatch(getUser()),
    clearError: () => dispatch(clearErrors()),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
