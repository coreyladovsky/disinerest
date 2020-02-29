import React, {useState, useEffect} from "react";
import { createPin } from "../../actions/pins_actions";
import { createBoard, fetchCurrentUserBoards } from "../../actions/boards_actions";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useInput } from '../../util/customHooks';
import "../../css/pins/PinsBuilder.css";

const PinsBuilder = () => {
  const pinTitle = useInput("")
  const pinDescription = useInput("")
  const pinLink = useInput("")
  const [pinUrl, setPinUrl] = useState(null)
  const [pinFile, setPinFile] = useState(null)
  const [boardId, setBoardId] = useState(null)
  const dispatch = useDispatch();
  const boards = useSelector(state => Object.values(state.boards));
  const currentUser = useSelector(state => state.session.currentUser);
  const { id } = useParams()


  useEffect(() => dispatch(fetchCurrentUserBoards(currentUser.id), []));

  const updateFile = e => {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      setPinFile(file);
      setPinUrl(fileReader.result )
    });
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  const pinUrlExternal = e => setPinUrl(e.target.value );

  const history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();
      await dispatch(createPin({
        title: pinTitle.value,
        description: pinDescription.value,
        link_url: pinLink.value,
        image_url: pinUrl,
        original_poster_id: id,
        user_id: currentUser.id,
        board_id: 1
      }))
      history.push("/");
  };

    return (
      <div className="PinsBuilder">
        <form onSubmit={handleSubmit}>
          <div className="drag-and-drop">
            <input
              type="file"
              className="image-input"
              accept="image/*"
              onChange={updateFile}
            />
          <img className="image-preview" src={pinUrl.value} />
          </div>
          <input
            type="text"
            onChange={pinUrlExternal}
            placeholder="Save from site"
          />
          <input
            type="text"
            id="pinTitle"
            placeholder="Add a title"
            {...pinTitle}
          />
          <textarea
            type="text"
            id="pinDescription"
            placeholder="Say more about this Pin"
            {...pinDescription}
            />
          <input
            type="text"
            id="pinLink"
            placeholder="Add the URL this pin links to"
            {...pinLink}
          />
          Select Board or Create New Board
          <select>
            {boards.map(board => (
              <option>{board.title}</option>
            ))}
          </select>
          <input type="text" placeholder="Board Name" />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
}

export default PinsBuilder;
