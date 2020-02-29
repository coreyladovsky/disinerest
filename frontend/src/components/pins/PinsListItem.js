import React from "react";
import "../../css/PinsListItem.css";
import { withRouter } from 'react-router-dom';

class PinsListItem extends React.Component {
  state = { hoverPhotos: false };

  toggleHover = e => {
    document.querySelectorAll(".pinCover").forEach(el => {
      el.classList.remove("pinCover")
      el.classList.add("hidePinCover")

    })
    this.setState({ hoverPhotos: !this.state.hoverPhotos });
  };

  showPinSaverModal = e => {
    e.stopPropagation();
  }

  goToPin = e => {
    this.props.history.push("/pins/" + this.props.pin.id)
  }

  mouseOut = event => {
    let e = event.toElement || event.relatedTarget;
    if(!e) { return}
    if (e.parentNode && e.parentNode.className == "pinCover" || e.className == "pinCover" || e.className && e.className.includes("dontChange")) {
      return
    } else {
      this.toggleHover();
    }
  };

  render() {
    let { pin } = this.props;
    return (
      <div className="PinListContainer">
        <li className="PinsListItem"
          onMouseEnter={this.toggleHover}
          >
          <img src={pin.image_url} alt="pin" />
        </li>
        <div
          className={this.state.hoverPhotos ? "pinCover" : "hidePinCover"}
          onMouseLeave={this.mouseOut}
          onClick={this.goToPin}
        >
          <button className="show-pinCreate-modal" onClick={this.showPinSaverModal}>
            {" "}
            <i class="fa fa-thumb-tack dontChange" aria-hidden="true" /> Save
          </button>
          <a href={pin.link_url} target="_blank" className="pink-link" onClick={(e) => e.stopPropagation()}>
            <i className="fa fa-arrow-up dontChange" aria-hidden="true" />
            {pin.link_url}
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(PinsListItem);
