import { combineReducers } from "redux";
import SessionReducer from "./SessionReducer";
import ErrorsReducer from "./ErrorsReducer";
import PinsReducer from "./PinsReducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  pins: PinsReducer
});

export default RootReducer;
