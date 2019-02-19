import React from "react";
import logo from "../../assets/dis-logo.png";
// import dots from "../../assets/threeDots.png";
import { NavLink, Link } from "react-router-dom";
import SearchFormContainer from "./Search/SearchFormContainer";
import "../../css/NavBar.css";

class NavBar extends React.Component {
  state = { menu: false };

  componentDidMount() {
    document.addEventListener("click", this.toggleMenu, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.toggleMenu, false);
  }

  toggleMenu = e => {
    e.stopPropagation();
    if (
      e.target.className === "menu-toggle" ||
      e.target.className === "fa fa-ellipsis-h"
    ) {
      this.setState({ menu: !this.state.menu });
    } else {
      this.setState({ menu: false });
    }
  };

  render() {
    if (!this.props.currentUser) return null;
    return (
      <nav className={"NavBar"}>
        <div className="leftNav">
          <Link to={"/"} className="logo-link">
            <img src={logo} alt="logo" />
          </Link>
          <SearchFormContainer />
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
                to={"/" + this.props.currentUser.id}
                className="userLink"
              >
                <div>
                  <img
                    src={
                      this.props.currentUser.image_url
                        ? this.props.currentUser.image_url
                        : "https://s3.amazonaws.com/helpcoreyladovskyprojectpro/users/images/000/000/087/original/default.jpg?1511850130"
                    }
                    alt="profile pic"
                    className="profilePic"
                  />
                </div>
                <div>{this.props.currentUser.email.split("@")[0]}</div>
              </NavLink>
            </li>
            <li className="menu-toggle">
              <a href="#" onclick="return false;" className="dots-tag">
                <i className="fa fa-ellipsis-h" aria-hidden="true" />
            </a>
              <ul className={this.state.menu ? "menu-show" : "menu-hide"}>
                <div className="triangle-border" />
                <div className="triangle" />
                <li onClick={() => this.props.logout()}>Log out</li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
