import { faBuilding, faEarthAsia, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Information.css'


const Information = () => {
    return (
        <div className=' container mt-5 pb-5'>

            <h2 className='text-light text-center mb-3'>Our Business Summery
            </h2>

            <div className='text-dark row'>
                <div className='col-6 col-lg-3 pt-3 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center'> <FontAwesomeIcon className='text-danger' icon={faBuilding}></FontAwesomeIcon> 15</p>
                        <p className='text-muted text-center'> Offices Worldwide</p>
                    </div>
                </div>
                <div className='col-6 col-lg-3 pt-3 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center'> <FontAwesomeIcon className='text-danger' icon={faPeopleGroup}></FontAwesomeIcon> 97</p>
                        <p className='text-muted text-center'> Hardworking People</p>
                    </div>
                </div>
                <div className='col-6 col-lg-3 pt-3 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center'> <FontAwesomeIcon className='text-danger' icon={faEarthAsia}></FontAwesomeIcon> 12</p>
                        <p className='text-muted text-center'> Countries Covered</p>
                    </div>
                </div>
                <div className='col-6 col-lg-3 pt-3 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center'> <FontAwesomeIcon className='text-danger' icon={faPeopleGroup}></FontAwesomeIcon> 25</p>
                        <p className='text-muted text-center'> Years of Experiences</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;