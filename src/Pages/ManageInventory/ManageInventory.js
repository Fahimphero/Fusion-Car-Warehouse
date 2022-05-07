import React, { useEffect, useState } from 'react';
import UseProducts from '../../Hooks/UseProducts';

const ManageInventory = () => {
    const [products, setProducts] = UseProducts();

    return (
        <div className='container bg-danger rounded-3'>
            <div className="row g-4 mt-5">
                {
                    products.slice(0, 6).map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;