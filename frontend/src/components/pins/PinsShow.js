import React, {useState, useEffect} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import defaultImage from "../../assets/defaultUsere.jpg";
import { fetchPin } from '../../actions/pins_actions';
import { useDispatch, useSelector } from 'react-redux';

import "../../css/PinsShow.css";

const PinsShow = () => {
  const [hoverPhotos, setHoverPhotos] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const toggleHover = e => setHoverPhotos(!hoverPhotos)
  const showPinSaverModal = e => e.stopPropagation()
  const goBack = e => history.goBack()
  const currentUser = useSelector(state => state.session.currentUser)
  const pin = useSelector(state => state.pins[id])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    dispatch(fetchPin(id))
  }, [])

    if (!pin) return null;
    if (!currentUser) return null;
    return (
      <div className="PinsShow">
        <button className="show-back-button" onClick={goBack}>
          <i className="fa fa-chevron-left" aria-hidden="true" />
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
                onClick={showPinSaverModal}
              >
                {" "}
                <i
                  className="fa fa-thumb-tack dontChange"
                  aria-hidden="true"
                />{" "}
                Save
              </button>
            </div>
            <div className="picShowHolder" onMouseOver={toggleHover} onMouseOut={toggleHover}>
              <img className="picShowCover" src={pin.image_url}  />
              <div
                className={
                  hoverPhotos
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

export default PinsShow;
