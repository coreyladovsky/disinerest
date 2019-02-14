// import merge from "lodash/merge";
import { RECEIVE_PINS } from "../actions/pins_actions";

const normalizeData = (pins) => {
  let obj = {};
  pins.forEach(pin => obj[pin.id] = pin)
  return obj;
}


const PinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PINS:
      return normalizeData(action.pins)
    default:
      return oldState;
  }
};

export default PinsReducer;
