import * as PinsApiUtil from "../util/pins_api_util";
import { receiveErrors, RECEIVE_ERRORS } from "./session_actions";

export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";

export const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

export const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

export const fetchAllPins = () => dispatch =>
  PinsApiUtil.fetchAllPins()
    .then(pins => {
      return dispatch(receivePins(pins.data.pins));
    })
    .catch(err => dispatch(receiveErrors(err.response)));

export const fetchPin = pinId => dispatch =>
  PinsApiUtil.fetchPin(pinId)
    .then(res => {
      return dispatch(receivePin(res.data.pin));
    })
    .catch(err => dispatch(receiveErrors(err.response)));

export const fetchQueryPins = query => dispatch => {
  return PinsApiUtil.fetchQueryPins(query)
    .then(pins => {
      return dispatch(receivePins(pins.data.pins));
    })
    .catch(err => {
      return dispatch(receiveErrors(err.response));
    });
};
