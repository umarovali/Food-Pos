import React from 'react';
import "./navbar.css"
import NavbarLink from "./NavbarLink/NavbarLink";
import Logo from "../../assets/images/home/Logo.svg";
import { GoHome } from "react-icons/go";
import { CiDiscount1 } from "react-icons/ci";

export default function Navbar() {
    return (
        <nav className='navbar_bg'>
            <ul className='navbar_ul'>
                <li className='navbar_logo_bg'>
                    <div className='navbar_logo'><img src={Logo} alt="" /></div>
                </li>
                <NavbarLink href={"/"} Icon={GoHome} />
                <NavbarLink href={"/discount"} Icon={CiDiscount1} />
                <NavbarLink href={"/dashboard"} Icon={GoHome} />
                <NavbarLink href={"/message"} Icon={GoHome} />
                <NavbarLink href={"/notification"} Icon={GoHome} />
                <NavbarLink href={"/setting"} Icon={GoHome} />
                <NavbarLink href={"/logout"} Icon={GoHome} />
            </ul>
        </nav>
    )
}
