import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from './Products';

const AllProducts = () => {
    const allProducts = useLoaderData();

    return (
        <div className='p-6'>
            <div className='text-2xl text-center font-sans font-bold text-white border-y-4 border-white rounded-2xl p-2 mb-8'>
                <h1>All Products</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-between'>
                {
                    allProducts.map(products => <Products
                        key={products._id} products={products}>

                    </Products>)
                }
            </div>
        </div>
    );
};

export default AllProducts;