import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {ADD_TO_BASKET} from "../../../redux/actionTypes";
import {useDispatch} from "react-redux";
import Basket from "../index";

const TableRow = ({product}) => {
    const dispatch = useDispatch()

    const addToBasket = (product) => {
        dispatch({type: ADD_TO_BASKET, payload: product})
    }
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">

            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.title}
            </th>
            <td className="py-4 px-6">
                <img src={product.image} alt="" width={40}/>
            </td>
            <td className="py-4 px-6">
                {product.quantity * product.price}
            </td>
            <td className="py-4 px-6 flex items-center">
                <span onClick={()=> addToBasket(product)}

                    className='font-bold cursor-pointer text-xl text-blue-600 dark:text-blue-500 hover:underline mx-2'>
                    <AiOutlinePlus/>
                </span>
                {product.quantity}
                <span className='font-bold cursor-pointer text-xl text-blue-600 dark:text-blue-500 hover:underline mx-2'>
                    <AiOutlineMinus/>
                </span>

            </td>

         </tr>

    );
};

export default TableRow;