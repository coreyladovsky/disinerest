import { combineReducers } from "redux";
import SessionErrorsReducer from "./SessionErrorsReducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer
});

export default ErrorsReducer;
