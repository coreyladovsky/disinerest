
import { combineReducers } from 'redux'
import SessionReducer from './SessionReducer';
import ErrorsReducer from './ErrorsReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer
})

export default RootReducer;
