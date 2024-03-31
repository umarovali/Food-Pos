import React from 'react';
import "./hot_dishes.css"
import { FaAngleDown } from "react-icons/fa6";

export default function HotDishes() {
    return (
        <section className='hot_deshis'>
            <div className="hot_deshis_title_select">
                <h2 className='hot_deshis_title'>Choose Dishes</h2>

                <div className='hot_deshis_arrow_select'>
                    <FaAngleDown className='hot_deshis_arrow' />
                    <select className='hot_deshis_select'>
                        <option value="DineIn">Dine In</option>
                    </select>

                    <ul className='hot_deshis_wrapper'>
                        <Item />
                    </ul>
                </div>
            </div>
        </section>
    )
}
