import React from 'react';
import "./hot_dishes.css"
import { FaAngleDown } from "react-icons/fa6";
import Items from './Items/Items';
// img
import ItemFoto1 from "../../../assets/images/item_foto/item_foto_1.png"


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
                </div>
            </div>
            <ul className='hot_deshis_wrapper'>
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
                <Items foto={ItemFoto1} title={"Spicy seasoned seafood noodles"} price={"$ 2.29"} suptitle={"20 Bowls available"} />
            </ul>
        </section>
    )
}
