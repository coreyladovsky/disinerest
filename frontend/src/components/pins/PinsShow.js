import React from 'react';
import { Link } from 'react-router-dom';
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
    if(!currentUser) return null;
    return (
      <div className="PinsShow">
        <button className="show-back-button"><i class="fa fa-chevron-left" aria-hidden="true"></i>Back</button>
        <div className="PinsDisplayBox">
          <div className="image-holder"  >
            <div className="pinControl">

          {pin.user_id === currentUser.id ? <Link to={"/pins/" + pin.id + "/edit"}> <div className="PinsShowEditButton"><i class="fa fa-pencil" aria-hidden="true"></i></div></Link> : <div></div>}

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
