import PinsBuilder from "./PinsBuilder";
import { connect } from "react-redux";
import { createPin } from "../../actions/pins_actions";
import { createBoard, fetchUserBoards } from "../../actions/boards_actions";


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPin: pin => dispatch(createPin(pin)),
    createBoard: board => dispatch(createBoard(board)),
    fetchUserBoards: id => dispatch(fetchUserBoards(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinsBuilder);
