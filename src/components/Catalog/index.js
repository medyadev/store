import React from 'react';
import {useSelector} from "react-redux";
import ProductCart from "../ProductCart";

const Catalog = () => {
    const {products} = useSelector(s => s)
    return   <div className='container'>

            <h1 className='text-black text-3xl text-left my-5' >Товары</h1>
            <div className='row flex flex-row flex-wrap'>
                {
                    products.map(product => <ProductCart product={product}/>)
                }
            </div>

    </div>

};


export default Catalog;