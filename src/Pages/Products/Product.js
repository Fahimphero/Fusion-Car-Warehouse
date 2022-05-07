import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    // console.log(product);
    const navigate = useNavigate();
    const handleManage = (id) => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='col-12 col-lg-6'>
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
                                    <button onClick={() => handleManage(product._id)} className='btn btn-danger'><small>Manage</small></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;