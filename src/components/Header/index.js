import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../Asets/img/logo.png'

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header__content">
                        <div className="header__content__block">
                            <div className="header__content__block__logo">
                            <img src={logo} alt=""/>
                        </div>

                        <div className="header__content__menu">
                            <NavLink to='/' className='header__content__menu__link'>Home</NavLink>
                            <NavLink to='products' className='header__content__menu__link'>Products</NavLink>
                            <NavLink to='favorites' className='header__content__menu__link'>Favorites</NavLink>
                            <NavLink to='basket' className='header__content__menu__link'>Basket</NavLink>
                        </div>
                        </div>

                </div>
            </div>


        </header>
    );
};
export default Header;