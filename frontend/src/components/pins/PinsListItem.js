import React from 'react';
import '../../css/PinsListItem.css'

export const PinsListItem = ({pin}) => {
  return(
    <li className="PinsListItem">
      <img src={pin.image_url} alt="pin" />
    </li>
  )
}
