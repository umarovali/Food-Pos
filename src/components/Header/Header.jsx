import React from 'react';
import { NavLink } from "react-router-dom";
import "./header.css"

export default function Header() {
    return (
        <header>
            <nav>
                <ul className='header_list'>
                    <li className='hot_deshis'><NavLink>Hot Dishes</NavLink></li>
                    <li><NavLink>Cold Dishes</NavLink></li>
                    <li><NavLink>Soup</NavLink></li>
                    <li><NavLink>Grill</NavLink></li>
                    <li><NavLink>Appetizer</NavLink></li>
                    <li><NavLink>Dessert</NavLink></li>
                </ul>
                <div className='header_hr'></div>
            </nav>
        </header>
    )
}
