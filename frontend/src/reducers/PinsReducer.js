// import merge from "lodash/merge";
// import { RECEIVE_PINS, RECEIVE_PIN } from "../actions/pins_actions";

// const normalizeData = (pins) => {
//   let obj = {};
//   pins.forEach(pin => obj[pin.id] = pin)
//   return obj;
// }


// const PinsReducer = (oldState = {}, action) => {
//   Object.freeze(oldState);
//   switch (action.type) {
//     case RECEIVE_PINS:
//       return merge({}, normalizeData(action.pins));
//     case RECEIVE_PIN:
//       return merge({}, oldState, {[action.pin.id]: action.pin} );
//     default:
//       return oldState;
//   }
// };

// export default PinsReducer;
