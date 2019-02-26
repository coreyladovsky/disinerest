import merge from "lodash/merge";
import { RECEIVE_BOARDS, RECEIVE_BOARD } from "../actions/boards_actions";

const normalizeData = (boards) => {
  let obj = {};
  boards.forEach(board => obj[board.id] = board)
  return obj;
}


const BoardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOARDS:
      return normalizeData(action.boards);
    case RECEIVE_BOARD:
      return merge({}, oldState, {[action.board.id]: action.board} );
    default:
      return oldState;
  }
};

export default BoardsReducer;
