import React from 'react'
import { PinsList } from './pins/PinsList';
import '../css/Home.css';

class Home extends React.Component {
  componentDidMount(){
    if(!this.props.pins.length) {
      this.props.fetchAllPins();
    }
  }
  render () {
    let modal
    if(this.props.path === "/signup" || this.props.path === "/login" ) {
       modal = " modal"
    } else {
      modal = ""
    }
    return(
      <div className={"Home" + modal}>
        <PinsList pins={this.props.pins}/>
      </div>
    )
  }
}

export default Home;
