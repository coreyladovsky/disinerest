import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import SearchFormContainer from './Search/SearchFormContainer';
import '../../css/NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <nav className={"NavBar"}>
        <div className="leftNav">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <SearchFormContainer />
        </div>
        <div className="rightNav" >
          <div className="logout-dots">

          </div>
          <ul className="tool-bar">
            <li onClick={() => this.props.logout()}>
              Log out
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
