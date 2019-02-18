import React from "react";
import logo from "../../assets/logo.png";
import dots from "../../assets/threeDots.png";
import { Link } from "react-router-dom";
import SearchFormContainer from './Search/SearchFormContainer';
import '../../css/NavBar.css'

class NavBar extends React.Component {
  state = {menu: false }

  componentDidMount() {
    document.addEventListener("click", () => {
      this.setState({menu: false })
    })
  }

  toggleMenu = (e) => {
      this.setState({menu: !this.state.menu})
  }

  render() {
    if(!this.props.currentUser) return null;
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
            <li><Link to={"/"}>Home</Link></li>
            <li >
              <img src={this.props.currentUser.image_url ? this.props.currentUser.image_url : "https://s3.amazonaws.com/helpcoreyladovskyprojectpro/users/images/000/000/087/original/default.jpg?1511850130" } alt="profile pic" className="profilePic"/>
              {this.props.currentUser.email.split("@")[0]}
            </li>
            <li onClick={this.toggleMenu}>
              <img src={dots} alt="dots" className="dots" />
            </li>
            <li onClick={() => this.props.logout()} className={this.state.menu ? "menu-show" : "menu-hide"}>
              Log out
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
