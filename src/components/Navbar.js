import React from "react";
import { NavLink } from "react-router-dom";
import './formm.css';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import StorageIcon from '@material-ui/icons/Storage';
import LockOpenIcon from '@material-ui/icons/LockOpen';

function Navbar () {
    return (
        <div className="main-nav">
        <>
             <ul>
                <li>
                  <NavLink to="/" aria-current="page"> <HomeIcon /> Home </NavLink>
                </li>
                
                <li>
                 <NavLink to={"/about"} aria-current="page"> <InfoIcon /> About </NavLink>
                </li>
                <li>
                 <NavLink to={"/userdata"} aria-current="page"> <StorageIcon /> Userdata </NavLink>
                </li>
                <li style={{textAlign: 'right'}}>
                 <NavLink to={"/Signup"} aria-current="page"> <LockOpenIcon /> Signup </NavLink>
                </li>
             </ul>
            </>
            </div>
    )
}

export default Navbar;