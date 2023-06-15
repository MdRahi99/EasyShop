import { BiDollar } from '@react-icons/all-files/bi/BiDollar';
import { BsStarFill } from '@react-icons/all-files/bs/BsStarFill';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const {name, img, price, rating, description} = productDetails;
    return (
        <div className='bg-white p-10 w-full mx-auto my-10 rounded-2xl lg:w-4/5'>
           <img className='w-full lg:w-4/5 mx-auto border-double border-b-4 shadow-md shadow-slate-900 rounded-2xl border-slate-900 h-64 lg:h-96' src={img} alt="" />
           <h1 className='text-lg lg:text-2xl text-center bg-slate-900 text-white p-4 rounded-2xl font-sans uppercase font-bold mt-4'>{name}</h1>
           <div className='flex lg:flex-row flex-col items-center justify-between mt-4 gap-4'>
                <small className='flex border-dashed border-y-2 border-slate-900 rounded-2xl gap-2 items-center justify-center font-sans w-full text-lg p-2 font-bold'><BsStarFill></BsStarFill>{rating}</small>
                <small className='flex border-dashed border-y-2 border-slate-900 rounded-2xl gap-1 items-center justify-center font-sans w-full text-lg p-2 font-bold'><BiDollar></BiDollar>{price}</small>
            </div>
            <p className='p-2 lg:p-4 rounded-2xl bg-slate-200 text-xl mt-2 mb-2 lg:mt-4 lg:mb-12 text-slate-900 font-serif'>{description}</p>
            <div className='p-4 text-white bg-slate-900 text-lg rounded-xl hover:font-bold mt-3 text-center hover:text-slate-900 hover:bg-white hover:border-x-2 hover:border-slate-900 font-sans'>
                <Link to="/all-products">Back</Link>
            </div>
        </div>
    );
};

export default ProductDetails;