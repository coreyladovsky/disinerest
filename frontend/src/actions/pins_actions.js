import * as PinsApiUtil from "../util/pins_api_util";
import {receiveErrors, RECEIVE_ERRORS} from './session_actions';

export const RECEIVE_PINS = "RECEIVE_PINS";

export const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

export const fetchAllPins = () => dispatch =>
  PinsApiUtil.fetchAllPins().then(pins => {
    return dispatch(receivePins(pins.data.pins));
  }).catch(err => dispatch(receiveErrors(err.response)) );
