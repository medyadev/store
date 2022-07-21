import React from 'react';
import {useSelector} from "react-redux";
import Cart from "./card";
import ProductCart from "../ProductCart";

const Favorites = () => {

    const {favorites} = useSelector(s => s)


    return   <div className='container'>
        <h1 className='text-black text-3xl text-left my-5' >ваши избранные товары</h1>
        <div className='row flex flex-row flex-wrap'>
            {
                favorites.map(product => <Cart product={product}/>)
            }
        </div>

    </div>

}
export default Favorites;