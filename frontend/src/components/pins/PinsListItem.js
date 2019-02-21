import React from "react";
import "../../css/PinsListItem.css";

class PinsListItem extends React.Component {
  state = { hoverPhotos: true };

  toggleHover = e => {
    // this.setState({ hoverPhotos: !this.state.hoverPhotos });
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
          onMouseOut={this.toggleHover}
        >
          <button className="show-pinCreate-modal">
            {" "}
            <i class="fa fa-thumb-tack" aria-hidden="true"></i> Save
          </button>
          <a href={pin.link_url} target="_blank" className="pink-link">
            <i className="fa fa-arrow-up" aria-hidden="true" />
            {pin.link_url}
          </a>
          ;
        </div>
      </div>
    );
  }
}

export default PinsListItem;
