import React from 'react';
import '../../css/users/UserShow.css';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
  }

  render () {
    debugger
    return (
      <div className="userShowContainer">
        hello
      </div>
    );
  }
}

export default UserShow;
