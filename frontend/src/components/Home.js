import React, { useEffect } from 'react'
import { PinsList } from './pins/PinsList';
import '../css/Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPins } from '../actions/pins_actions';
import { useLocation } from 'react-router-dom';

const Home = () =>  {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchAllPins()) }, [])

  const location = useLocation();
    let modal
    if(location.path === "/signup" || location.path === "/login" ) {
       modal = " modal"
    } else {
      modal = ""
    }

    const pins = useSelector(state => Object.values(state.pins));

    return(
      <div className={"Home" + modal}>
        <PinsList pins={pins}/>
      </div>
    )
}

export default Home;
