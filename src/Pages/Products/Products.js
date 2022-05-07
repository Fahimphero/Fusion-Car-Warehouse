import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    // const [count, setCount] = useState();
    // const arrayLength = products.length;
    // arrayLength(arrayLength);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

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

export default Products;