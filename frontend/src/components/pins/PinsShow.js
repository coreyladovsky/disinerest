import React from 'react';
import '../../css/PinsShow.css';

class PinsShow extends React.Component {
  state = { hoverPhotos: false };
  toggleHover = e => {
    this.setState({ hoverPhotos: !this.state.hoverPhotos });
  };

  showPinSaverModal = e => {
    e.stopPropagation();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPin(this.props.match.params.id)
  }
  render () {
    let { pin, currentUser } = this.props;
    if(!pin) return null;
    return (
      <div className="PinsShow">
        <div className="PinsDisplayBox">
          <div className="image-holder"  >
            <div className="pinControl">
              <div>
          {pin.user_id === currentUser.id ? <i class="fa fa-pencil" aria-hidden="true"></i> : null}
              </div>
              <button className="show-pinCreate-modal" onClick={this.showPinSaverModal}>
                {" "}
                <i class="fa fa-thumb-tack dontChange" aria-hidden="true" /> Save
              </button>
            </div>

          <img src={pin.image_url} onMouseOver={this.toggleHover} />
        <div className={this.state.hoverPhotos ? "whiteImageCover" : "whiteImageCoverHide" }
          onMouseOut={this.toggleHover.bind(this)}>

          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PinsShow;
