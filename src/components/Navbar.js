import React from 'react'
import labels from '../config/labels'
import WCSimage from '../WCSimage.png';

const Navbar=()=>{
   return (
        <nav className="nav-wrapper white">
        <div className="container">
        <img className="left" src={WCSimage} alt="A WCSimage" width={55} height={57}/>
        <ul className="right">
            <li><a href="/more">{labels.NAVBAR.MORE}</a></li>
            <li><a href="/login"><button>{labels.NAVBAR.LOGIN_OR_SIGNUP}</button></a></li>
        </ul>
      </div>
      </nav>
    )
  }


export default Navbar
