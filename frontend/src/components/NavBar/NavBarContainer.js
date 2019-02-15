import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './NavBar';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(null, mapDispatchToProps)(NavBar);
