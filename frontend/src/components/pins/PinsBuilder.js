import React from 'react'
import "../../css/pins/PinsBuilder.css"


class PinsBuilder extends React.Component {
  state = { pinTitle: "", pinDescription: "", pinLink: "", pinUrl: null, pinFile: null, boardId: null}

  componentDidMount() {
    this.props.fetchUserBoards(this.props.match.params.id)
  }

  updateFile = (e) => {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.addEventListener( "load", ()=> {
      this.setState({pinFile: file, pinUrl: fileReader.result})
    });
    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  pinUrlExternal = (e) => {
    this.setState({pinUrl: e.target.value})
  }

  updateForm = e => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPin({
      title: this.state.pinTitle,
      description: this.state.pinDescription,
      link_url: this.state.pinLink,
      image_url: this.state.pinUrl,
      original_poster_id: this.props.match.params.id,
      user_id: this.props.match.params.id,
      board_id: 1
    }).then((res) => {
      this.props.history.push("/")
    })

  }

  render () {
    let { pinTitle, pinDescription, pinLink} = this.state;
    return(
      <div className="PinsBuilder">
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="file" accept="image/*" onChange={this.updateFile.bind(this)} />
        <img className="image-preview" src={this.state.pinUrl} />
        <input type="text" onChange={this.pinUrlExternal} placeholder="Save from site" />
        <input type="text" id="pinTitle" onChange={this.updateForm} placeholder="Add a title" value={pinTitle} />
        <textarea type="text" id="pinDescription"  onChange={this.updateForm} placeholder="Say more about this Pin" value={pinDescription}></textarea>
        <input type="text" id="pinLink"  onChange={this.updateForm} placeholder="Add the URL this pin links to" value={pinLink}/>
        Select Board or Create New Board
        <select>
          {this.props.boards.map(board =>
            <option>{board.title}</option>
          )}
        </select>
        <input type="text" placeholder="Board Name" />
        <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

export default PinsBuilder;
