import * as BoardsApiUtil from "../util/boards_api_util";
import { receiveErrors, RECEIVE_ERRORS } from "./session_actions";

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});
export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

export const createBoard = board => dispatch =>
  BoardsApiUtil.createBoard(board)
    .then(res => {
      return dispatch(receiveBoard(res.data.board));
    })
    .catch(err => dispatch(receiveErrors(err.response)));

export const fetchUserBoards = (id) => dispatch =>
  BoardsApiUtil.fetchUserBoards(id)
    .then(boards => {
      return dispatch(receiveBoards(boards.data.boards));
    })
    .catch(err => dispatch(receiveErrors(err.response)));
