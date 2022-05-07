import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts';
import Product from './Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = UseProducts();
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/manageInventories')
    }


    return (
        <div className='container bg-danger rounded-3'>
            <div className="row g-4 mt-5">
                {
                    products.slice(0, 6).map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={() => handleNavigation()} className='btn btn-dark  mb-3 '>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Products;