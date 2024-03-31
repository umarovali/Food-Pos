import React from 'react';
import { NavLink } from "react-router-dom"
import "./navbarlink.css"
import "../navbar.css"
import { GrHomeRounded } from "react-icons/gr";

export default function NavbarLink({ href, Icon }) {
    return (
        <>
            <li className='navbar_li'>
                <NavLink to={href} className="navbar_link">
                    <div className="navabar_bg">
                        <Icon className='navbar_icons' />
                    </div>
                </NavLink>
            </li>
            {/* <li className='navbar_li'>
                <NavLink to="/dashboard" className="navbar_link">
                    <div className="navabar_bg">
                        <GrHomeRounded className='navbar_icons' />
                    </div>
                </NavLink>
            </li> */}
        </>
    )
}
