import PinsBuilder from "./PinsBuilder";
import { connect } from "react-redux";
import { createPin } from "../../actions/pins_actions";
import { createBoard, fetchCurrentUserBoards } from "../../actions/boards_actions";


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    boards: Object.values(state.boards)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPin: pin => dispatch(createPin(pin)),
    createBoard: board => dispatch(createBoard(board)),
    fetchCurrentUserBoards: id => dispatch(fetchCurrentUserBoards(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinsBuilder);
