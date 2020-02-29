import React, { useState } from "react";
import "../../css/PinsListItem.css";
import { useHistory } from "react-router-dom";

const PinsListItem = ({ pin }) => {
  const [hoverPhotos, setHoverPhotos] = useState(false);

  const toggleHover = e => {
    document.querySelectorAll(".pinCover").forEach(el => {
      el.classList.remove("pinCover");
      el.classList.add("hidePinCover");
    });
    setHoverPhotos(!hoverPhotos);
  };

  const showPinSaverModal = e => e.stopPropagation();

  const history = useHistory();
  const goToPin = e => {
    history.push("/pins/" + pin.id);
  };

  const mouseOut = event => {
    let e = event.toElement || event.relatedTarget;
    if (!e) return;
    if (
      (e.parentNode && e.parentNode.className == "pinCover") ||
      e.className == "pinCover" ||
      (e.className && e.className.includes("dontChange"))
    ) {
      return;
    } else {
      toggleHover();
    }
  };

  return (
    <div className="PinListContainer">
      <li className="PinsListItem" onMouseEnter={toggleHover}>
        <img src={pin.image_url} alt="pin" />
      </li>
      <div
        className={hoverPhotos ? "pinCover" : "hidePinCover"}
        onMouseLeave={mouseOut}
        onClick={goToPin}
      >
        <button
          className="show-pinCreate-modal"
          onClick={showPinSaverModal}
        >
          {" "}
          <i className="fa fa-thumb-tack dontChange" aria-hidden="true" /> Save
        </button>
        <a
          href={pin.link_url}
          target="_blank"
          className="pink-link"
          onClick={e => e.stopPropagation()}
        >
          <i className="fa fa-arrow-up dontChange" aria-hidden="true" />
          {pin.link_url}
        </a>
      </div>
    </div>
  );
};

export default PinsListItem;
