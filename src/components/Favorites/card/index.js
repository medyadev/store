import React from 'react';
import AddedToCart from "../../ui/AddedToCart";
import AddToCart from "../../ui/addToCart";
import AddToFavorite from "../../ui/AddToFavorite";
import { FaTimesCircle} from "react-icons/fa";

const Cart = ({product}) => {

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
                      {/*      {*/}
                      {/*          isAdded ? <AddedToCart/>:<AddToCart product={product} addToBasket={addToBasket}/>*/}

                      {/*      }*/}
                      </span>




                        <span>
                          {/*<AddToFavorite addToFavorite={addToFavorite} product={product}/>*/}
                            <FaTimesCircle/>
                      </span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;