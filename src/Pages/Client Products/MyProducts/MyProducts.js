import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import './MyProducts.css'

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://fusion-car-warehouse-server.onrender.com/clientproducts/${user?.email}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [user?.email])


    // const navigate = useNavigate();

    // const handleNavigation = () => {
    //     navigate('/addinventory')
    // }


    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://fusion-car-warehouse-server.onrender.com/clientproducts/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })

        }

    }

    return (
        <div className='bg-dark fix-height' >
            <div className='container py-5'>
                <div className="row g-4 bg-danger rounded-3">
                    {
                        products.map(product =>

                            <div key={product._id} className='col-12 col-lg-6'>
                                <div className="card mb-3 w-100 hover" >
                                    <div className="row g-0">
                                        <div className="col-md-6 overflow-hidden">
                                            <img src={product.image} className="img-fluid rounded-start h-100" alt="..."></img>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h5 className="card-title fw-bolder">{product.name}</h5>
                                                <div className='card-text'>
                                                    <p > {product.body.slice(0, 100)}...</p>
                                                    <div className='d-flex justify-content-between'>
                                                        <p > <strong className='fs-5'>Price:</strong> <span className='text-danger fw-bold fs-5'>${product.price}</span> </p>
                                                        <p><strong className='fs-5'>Quantity:</strong> <span className='text-danger fw-bold fs-5'>{product.quantity}</span></p>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <p className='mb-0'><strong className='fs-6'>Company: </strong> {product.company}</p>
                                                        <button onClick={() => handleDelete(product._id)} className='btn btn-danger'><small>Delete</small></button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
            {/* <div className='d-flex justify-content-center'>
                <button onClick={() => handleNavigation()} className='btn btn-danger  mb-4 '>Add New Item</button>
            </div> */}
        </div>
    );
};

export default MyProducts;