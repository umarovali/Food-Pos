import React from 'react';
import Seach from './Search/Seach';
import Orders from './Orders/Orders';
import "./home.css"
import Header from '../../components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HotDishes from './HotDishes/HotDishes';

export default function Home() {
    return (
        <div className='home_wrapper'>
            <div className="home_left">
                <Seach />
                <Header />
                <HotDishes />
            </div>

            <div className="home_right">
                <Orders />
            </div>
        </div>
    )
}
