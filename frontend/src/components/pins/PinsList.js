import React from 'react';
import PinsListItem  from './PinsListItem';
import '../../css/PinsList.css'

export const PinsList = ({pins}) => {
  if(!pins) return null;
  pins = pins.map(pin => {
    return <PinsListItem key={pin.id} pin={pin} />
  })
  return(
    <ul className="PinsList">
      {pins}
    </ul>
  )
}
