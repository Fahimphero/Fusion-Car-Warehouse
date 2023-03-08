import React from 'react';
import Icon1 from '../../Images/Icons/audi.png'
import Icon2 from '../../Images/Icons/bmw.png'
import Icon3 from '../../Images/Icons/ferrari.png'
import Icon4 from '../../Images/Icons/ford.png'
import Icon5 from '../../Images/Icons/lamborghini.png'
import Icon6 from '../../Images/Icons/porsche.png'
import './Partners.css'


const Partners = () => {
    return (
        <div className='container text-light bg-light mt-5 border-style rounded-3'>
            <h2 className='text-start text-dark fw-bolder pt-2'>
                Our Partners
            </h2>
            <div className='row pb-4 '>
                <div className='col-4 col-lg-2 d-flex justify-content-center'>
                    <img src={Icon1} alt="" />
                </div>
                <div className='col-4 col-lg-2 d-flex justify-content-center'>
                    <img src={Icon2} alt="" />
                </div>
                <div className='col-4 col-lg-2 d-flex justify-content-center'>
                    <img src={Icon3} alt="" />
                </div>
                <div className='col-4 col-lg-2 d-flex justify-content-center'>
                    <img src={Icon4} alt="" />
                </div>
                <div className='col-4 col-lg-2 d-flex justify-content-center'>
                    <img src={Icon5} alt="" />
                </div>
                <div className='col-4 col-lg-2 d-flex justify-content-center'>
                    <img src={Icon6} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Partners;