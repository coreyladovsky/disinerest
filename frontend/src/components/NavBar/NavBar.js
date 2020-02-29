import React, {useState, useEffect} from "react";
import logo from "../../assets/dis-logo.png";
import { logout } from '../../actions/session_actions';
import { NavLink, Link, useLocation } from "react-router-dom";
import SearchForm from "./Search/SearchForm";
import "../../css/NavBar.css";
import { useDispatch, useSelector } from 'react-redux'

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const currentUser = useSelector(state => state.session.currentUser)
  const dispatch = useDispatch();
  const location = useLocation();

  const toggleMenu = e => {
    document.querySelectorAll("a").forEach(tag => tag.blur())
    e.stopPropagation();
    if (
      e.target.className === "menu-toggle" ||
      e.target.className === "fa fa-ellipsis-h" ||
        e.target.className === "dots-tag"
    ) {
      setMenu(!menu);
    } else {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", toggleMenu, false);
    document.addEventListener("submit", toggleMenu, false);
    return () => {
      document.removeEventListener("click", toggleMenu, false);
      document.removeEventListener("submit", toggleMenu, false);
    }
  }, [])

  if (!currentUser) return null;
  return (
    <nav className={"NavBar"}>
      <div className="leftNav">
        <Link to={"/"} className="logo-link">
          <img src={logo} alt="logo" />
        </Link>
        <SearchForm />
      </div>
      <div className="rightNav">
        <ul className="tool-bar">
          <li>
            <NavLink exact to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/users/" + currentUser.id}
              className="userLink"
            >
              <div>
                <img
                  src={
                    currentUser.image_url
                      ? currentUser.image_url
                      : "https://s3.amazonaws.com/helpcoreyladovskyprojectpro/users/images/000/000/087/original/default.jpg?1511850130"
                  }
                  alt="profile pic"
                  className="profilePic"
                />
              </div>
              <div>{currentUser.email.split("@")[0]}</div>
            </NavLink>
          </li>
          <li className="menu-toggle">
            <Link to={location.pathname} className="dots-tag" >
              <i className="fa fa-ellipsis-h" aria-hidden="true" />
          </Link>
            <ul className={menu ? "menu-show" : "menu-hide"}>
              <div className="triangle-border" />
              <div className="triangle" />
              <li onClick={() => dispatch(logout())}>Log out</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );

}

export default NavBar;
