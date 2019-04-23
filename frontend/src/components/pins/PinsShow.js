import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../assets/defaultUsere.jpg";
import "../../css/PinsShow.css";

class PinsShow extends React.Component {
  state = { hoverPhotos: false };
  toggleHover = e => {
    this.setState({ hoverPhotos: !this.state.hoverPhotos });
  };

  showPinSaverModal = e => {
    e.stopPropagation();
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPin(this.props.match.params.id);
  }

  goBack = e => {
    this.props.history.goBack();
  };
  render() {
    let { pin, currentUser } = this.props;
    if (!pin) return null;
    if (!currentUser) return null;
    return (
      <div className="PinsShow">
        <button className="show-back-button" onClick={this.goBack.bind(this)}>
          <i class="fa fa-chevron-left" aria-hidden="true" />
          Back
        </button>
        <div className="PinsDisplayBox">
          <div className="image-holder">
            <div className="pinControl">
              {pin.user_id === currentUser.id ? (
                <Link to={"/pins/" + pin.id + "/edit"}>
                  {" "}
                  <div className="PinsShowEditButton">
                    <i class="fa fa-pencil" aria-hidden="true" />
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <button
                className="show-pinCreate-modal"
                onClick={this.showPinSaverModal}
              >
                {" "}
                <i
                  class="fa fa-thumb-tack dontChange"
                  aria-hidden="true"
                />{" "}
                Save
              </button>
            </div>
            <div className="picShowHolder" onMouseOver={this.toggleHover} onMouseOut={this.toggleHover.bind(this)}>
              <img className="picShowCover" src={pin.image_url}  />
              <div
                className={
                  this.state.hoverPhotos
                    ? "whiteImageCover"
                    : "whiteImageCoverHide"
                }
              />
          </div>
            <a className="pinLinkTag" href={pin.link_url} target="_blank">
              <i className="fa fa-arrow-up" aria-hidden="true" /> {pin.link_url}
            </a>

            <div className="pinOwnerInfo">
              <div className="displayInfo">
                <img
                  className="diplayInfoUserPic"
                  src={pin.owner_image ? pin.owner_image : defaultImage}
                  alt="pin owner"
                />
              <div className="diplayInfoUserName">{pin.owner_email ? pin.owner_email.split("@")[0]: "Unknown"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PinsShow;
