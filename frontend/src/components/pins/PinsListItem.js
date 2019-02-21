import React from "react";
import "../../css/PinsListItem.css";

class PinsListItem extends React.Component {
  state = { hoverPhotos: false };

  toggleHover = e => {
    this.setState({ hoverPhotos: !this.state.hoverPhotos });
  };

  mouseOut = event => {
    let e = event.toElement || event.relatedTarget;
    if(!e) { return}
    debugger
    if (e.parentNode.className == "pinCover" || e.className == "pinCover" || e.className.includes("dontChange")) {
      return
    } else {
      this.toggleHover();
    }
  };

  render() {
    let { pin } = this.props;
    return (
      <div className="PinListContainer">
        <li className="PinsListItem" onMouseOver={this.toggleHover}>
          <img src={pin.image_url} alt="pin" />
        </li>
        <div
          className={this.state.hoverPhotos ? "pinCover" : "hidePinCover"}
          onMouseOut={this.mouseOut}
        >
          <button className="show-pinCreate-modal">
            {" "}
            <i class="fa fa-thumb-tack dontChange" aria-hidden="true" /> Save
          </button>
          <a href={pin.link_url} target="_blank" className="pink-link">
            <i className="fa fa-arrow-up dontChange" aria-hidden="true" />
            {pin.link_url}
          </a>
        </div>
      </div>
    );
  }
}

export default PinsListItem;
