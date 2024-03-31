import React from 'react';
import "./search.css";
import { LuSearch } from "react-icons/lu";

export default function Seach() {
    return (
        <section className='search'>
                <div className="search_wrapper">
                    <div className="search_name">
                        <h1 className='search_title'>Jaegar Resto</h1>
                        <p className='search_suptitle'>Tuesday, 2 Feb 2021</p>
                    </div>

                    <div className="search_icon_input">
                        <LuSearch className='search_icon' />
                        <input className='search_input' type="text" placeholder='Search for food, coffe, etc..' />
                    </div>
                </div>
        </section>
    )
}
