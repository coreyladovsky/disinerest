import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pins_actions';
import PinsShow from './PinsShow';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    pin: state.pins[ownProps.match.params.id],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPin: (id) => dispatch(fetchPin(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinsShow);
