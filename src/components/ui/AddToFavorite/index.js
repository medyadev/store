import React from 'react';
import {AiFillHeart} from "react-icons/ai";

const AddToFavorite = ({addToFavorite,product,deleteCard}) => {


    return (
        <button
            onClick={() => product.isLiked ? deleteCard(product.id ) :addToFavorite(product)}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
         <span
             className={`${product.isLiked ? 'text-red-700' : ''} "relative  flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" `}>
             <AiFillHeart/>
         </span>
        </button>
    );
};

export default AddToFavorite;