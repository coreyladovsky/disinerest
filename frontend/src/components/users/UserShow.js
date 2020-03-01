import React, { useEffect } from 'react';
import '../../css/users/UserShow.css';
import { Link, Route, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from "../../actions/users_actions";

const UserShow = () => {
  const dispatch = useDispatch();
  const  { id } = useParams();
  useEffect(() => {
    dispatch(fetchUser(id))
  }, [])

  const user = useSelector(state => state.users[id]);



  if(!user) return null;
  return (
    <div className="userShowContainer">
      <div className="userShowInfo">

     {user.first_name ? user.first_name : user.email.split("@")[0] }
      <img src={user.avatar ? user.avatar : "https://s3.amazonaws.com/helpcoreyladovskyprojectpro/users/images/000/000/087/original/default.jpg?1511850130"} alt="Profile Pic" />
      <Link to={`/users/${id}/boards`}>Boards</Link>
      <Link  to={`/users/${id}/pins`}>Pins</Link>
    </div>

    </div>
  );

}

export default UserShow;
