import React from 'react';
import {useSelector} from "react-redux";
import TableRow from "./TableRow";

const Basket = () => {

    const {basket} =useSelector(s => s)

    const totalSam = basket.reduce((acc,el) =>{
        return acc + el.price * el.quantity
    },0)
    return (
        <div className='container'>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Product name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            product image
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                            quantity
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        basket.map(el => <TableRow key={el.id} product={el} />)
                    }
                    <tr>
                        <td className="py-4 px-6">
                            Обшая сумма
                        </td>
                        <td className="py-4 px-6">
                            {totalSam}
                        </td>


                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Basket;