import React from 'react';
import '../../css/users/UserShow.css';
import { Link, Route } from 'react-router-dom';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
  }

  render () {
    let { user } = this.props;
    if(!user) return null;
    return (
      <div className="userShowContainer">
        <div className="userShowInfo">

       {user.first_name ? user.first_name : user.email.split("@")[0] }
       <img src={user.avatar ? user.avatar : "https://s3.amazonaws.com/helpcoreyladovskyprojectpro/users/images/000/000/087/original/default.jpg?1511850130"} alt="Profile Pic" />
     <Link to={`/users/${this.props.match.params.id}/boards`}>Boards</Link>
    <Link  to={`/users/${this.props.match.params.id}/pins`}>Pins</Link>
      </div>

      </div>
    );
  }
}

export default UserShow;
