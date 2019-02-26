import { combineReducers } from "redux";
import SessionReducer from "./SessionReducer";
import ErrorsReducer from "./ErrorsReducer";
import PinsReducer from "./PinsReducer";
import BoardsReducer from "./BoardsReducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  pins: PinsReducer,
  boards: BoardsReducer,
});

export default RootReducer;
