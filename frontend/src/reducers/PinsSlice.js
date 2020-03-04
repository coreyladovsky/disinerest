import { createSlice } from '@reduxjs/toolkit'


const normalizeData = (pins) => {
  let obj = {};
  pins.forEach(pin => obj[pin.id] = pin)
  return obj;
}

const pinsSlice = createSlice({
  name: 'pins',
  initialState: {},
  reducers: {
    receivePins(state, action) {
      const normalized = normalizeData(action.payload)
      return {...state, ...normalized}
    },
    receivePin(state, action) {
        return {...state, [action.payload.id]: action.payload}
    }
  }
})

export const { receivePins, receivePin } = pinsSlice.actions

export default pinsSlice.reducer