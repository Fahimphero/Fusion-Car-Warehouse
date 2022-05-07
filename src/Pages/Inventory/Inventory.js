import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './inventory.css';


const Inventory = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState('');
    const [delivered, setDelivered] = useState('');
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handleDelivered = (quantity) => {
        console.log(quantity)

    }


    return (
        <div className='py-3 bg-dark'>
            <div className="card product-detail mx-auto" >
                <img src={product?.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{product?.name}</h5>
                    <div className="card-text">
                        <p > {product.body}</p>
                        <div className='d-flex justify-content-around'>
                            <p > <strong className='fs-5'>Price:</strong> <span className='text-danger fw-bold fs-5'>${product?.price}</span>
                            </p>
                            <p > <strong className='fs-5'>Sold:</strong> <span className='text-danger fw-bold fs-5'>00</span>
                            </p>
                            <p><strong className='fs-5'>Quantity:</strong> <span className='text-danger fw-bold fs-5'>{product?.quantity}</span>
                            </p>
                        </div>
                        <div className='d-flex justify-content-around align-items-center'>
                            <p className='mb-0'><strong className='fs-6'>Company: </strong> {product.company}</p>
                            <button onClick={() => handleDelivered(product.quantity)} className='btn btn-danger'><strong>Delivered</strong></button>
                        </div>
                    </div>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a>  */}
                </div>
            </div>
        </div>
    );
};

export default Inventory;