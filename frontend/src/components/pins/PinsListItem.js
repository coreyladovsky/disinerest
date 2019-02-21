import React from "react";
import "../../css/PinsListItem.css";

class PinsListItem extends React.Component {
  state = { hoverPhotos: false };

  toggleHover = e => {
    this.setState({ hoverPhotos: !this.state.hoverPhotos });
  };


  render() {
    let { pin } = this.props;
    return (
      <di className="PinListContainer">
        <li className="PinsListItem" onMouseOver={this.toggleHover} >
          <img src={pin.image_url} alt="pin" />
        </li>
        <div className={this.state.hoverPhotos ? "pinCover" : "hidePinCover"} onMouseOut={this.toggleHover}/>
      </di>
    );
  }
}

export default PinsListItem;
