import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddToCart from "../ui/addToCart";
import AddToFavorite from "../ui/AddToFavorite";
import AddedToCart from "../ui/AddedToCart";
import {ADD_TO_BASKET, ADD_TO_FAVORITE, DELETE_FROM_FAVORITE} from "../../redux/actionTypes";

const ProductCart = ({product}) => {

    const dispatch = useDispatch()
    const {basket} = useSelector(s => s)
    let isAdded= basket.some(el => el.id === product.id)
    const addToBasket = (product) => {
        dispatch({type: ADD_TO_BASKET, payload: product})
    }
    const deleteFromFav = (id) => {
        dispatch({type:DELETE_FROM_FAVORITE,payload:id})
    }


    const addToFavorite = (product)=>{

        product.isLiked = true


        dispatch({type: ADD_TO_FAVORITE, payload: product})

    }

    return (
        <div className='basis-1/4 '>
            <div
                className=" m-4 max-w-sm bg-lime-100 rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={product.image} alt=""/>
                <div className="p-5">
                    <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price}</p>
                    <div className='flex items-center'>
                      <span>
                            {
                                isAdded ? <AddedToCart/>:<AddToCart product={product} addToBasket={addToBasket}/>

                            }
                      </span>




                      <span>
                          <AddToFavorite addToFavorite={addToFavorite} product={product} deleteCard={deleteFromFav}/>
                      </span>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductCart;