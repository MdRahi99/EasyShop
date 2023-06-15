import React from 'react';
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import { BiDollar } from "@react-icons/all-files/bi/BiDollar";
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
    const { _id, name, img, rating, price } = products;
    return (
        <div className='bg-white p-4 rounded-xl'>
            <img className='w-full h-52' src={img} alt="" />
            <h1 className='text-lg my-2 text-center font-sans rounded-2xl p-1 border-y-2 border-slate-900 font-bold uppercase'>
                {name}
            </h1>
            <div className='flex items-center justify-between'>
                <small className='flex gap-2 items-center font-sans text-lg font-bold'><BsStarFill></BsStarFill>{rating}</small>
                <small className='flex gap-1 items-center font-sans text-lg font-bold'><BiDollar></BiDollar>{price}</small>
            </div>
            <div className='p-2 text-white bg-slate-900 text-md rounded-xl hover:font-bold mt-3 text-center hover:text-slate-900 hover:bg-white hover:border-x-2 hover:border-slate-900 font-sans'>
                <Link to={`/product-details/${_id}`}>More Details</Link>
            </div>
        </div>
    );
};

export default Products;