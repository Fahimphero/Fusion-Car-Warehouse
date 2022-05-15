import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'



import React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='bg-danger'>
            <div className='container pt-3 text-light bg-dark'>
                {/* <p>This is footer</p> */}
                <div className='row'>
                    <div className='col-12 col-lg-4'>
                        <h4 className='text-center'>Newsletter</h4>
                        <p className='text-center'>By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!</p>
                        <div className='mx-auto'>
                            <input type="email" className="form-control w-75 d-block  ms-5" id="exampleInputEmail" aria-describedby="emailHelp" placeholder='Email'></input>
                            <button className='btn btn-danger d-block me-auto ms-5 my-2' type="submit">Subscribe</button>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <h4 className='text-center'>Twitter Feed</h4>
                        <p className='text-center'><FontAwesomeIcon icon={faTwitter} /> Check out our latest car release 'Landscaping'</p><p className='text-center'><a style={{ textDecoration: 'none' }} className='text-muted' href="https://twitter.com/?lang=en">Fusion Warehouse</a></p>


                    </div>
                    <div className='col-12 col-lg-4'>
                        <h4 className='text-center'>Contact Us</h4>
                        <p className='text-center'><FontAwesomeIcon icon={faHome} /> Address: 1234 Street Name, City Name, AB</p>
                        <p className='text-center'><FontAwesomeIcon icon={faPhone} /> Phone: 1-800-123-4567</p>
                        <p className='text-center'><FontAwesomeIcon icon={faEnvelope} /> Email: sales@company.com</p>
                    </div>
                </div>
                <div className='pb-3 d-flex flex-column'>
                    <small className='text-center'>Copyright © 2022 Fusion-Warehouse.web.app/</small>
                    <small className='text-center'>All rights reserved.</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;