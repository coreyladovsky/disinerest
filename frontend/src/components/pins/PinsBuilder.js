import React from 'react'
import "../../css/pins/PinsBuilder.css"


class PinsBuilder extends React.Component {
  state = { pinTitle: "", pinDescription: "", pinLink: "", pinUrl: null, pinFile: null, boardId: null}

  componentDidMount() {
    this.props.fetchUserBoards(this.props.match.params.id)
  }

  updateFile = (e) => {

  }

  pinUrlExternal = (e) => {
    this.setState({pinUrl: e.target.value})
  }

  updateForm = e => {
    this.setState({[e.target.id]: e.target.value})
  }

  render () {
    return(
      <div className="PinsBuilder">
        <form>
        <input type="file" accept="image/*" onChange={this.updateFile} />
        <input type="text" onChange={this.pinUrlExternal} placeholder="Save from site" />
        <input type="text" id="pinTitle" onChange={this.updateForm} placeholder="Add a title" />
        <textarea type="text" id="pinDescription"  onChange={this.updateForm} placeholder="Say more about this Pin" ></textarea>
        <input type="text" id="pinLink"  onChange={this.updateForm} placeholder="Add the URL this pin links to"/>
        Boards
        <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

export default PinsBuilder;
