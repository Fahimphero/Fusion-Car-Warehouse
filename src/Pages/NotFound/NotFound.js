import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../Images/404.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css'


const NotFound = () => {
    return (
        <div >
            <div className='background-img'>
                <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
                    <img className='img-fluid' src={Error} alt="" />
                </div>
                <div className='title d-flex justify-content-center'><span className=''>PAGE NOT FOUND</span></div>
                <div className='goback d-flex justify-content-center'> <Link to='/'><button className="btn btn-dark mb-4"><FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon>  Go back to Homepage</button></Link></div>

            </div>
        </div>
    );
};

export default NotFound;