import { connect } from 'react-redux';
import { fetchAllPins } from '../actions/pins_actions';
import Home from './Home';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    pins: Object.values(state.pins),
    path: ownProps.location.pathname,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
