import React from 'react';
import "./item.css"

export default function Items({foto, title, price, suptitle}) {
    return (
        <li className='item'>
            <img className='item_foto' src={foto} alt="" />
            <h3 className="item_title">{title}</h3>
            <span className='item_price'>{price}</span>
            <p className='item_suptitile'>{suptitle}</p>
        </li>
    )
}
