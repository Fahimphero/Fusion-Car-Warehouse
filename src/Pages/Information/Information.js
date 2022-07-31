import { faBuilding, faEarthAsia, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Information.css'


const Information = () => {
    return (
        <div className='text-dark container mt-4 pb-5'>
            <div className='row'>
                <div className='col-6 col-lg-3 pt-2 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center'> <FontAwesomeIcon className='text-danger' icon={faBuilding}></FontAwesomeIcon> 15</p>
                        <p className='text-muted'> Offices Worldwide</p>
                    </div>
                </div>
                <div className='col-6 col-lg-3 pt-2 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center'> <FontAwesomeIcon className='text-danger' icon={faPeopleGroup}></FontAwesomeIcon> 97</p>
                        <p className='text-muted'> Hardworking People</p>
                    </div>
                </div>
                <div className='col-6 col-lg-3 pt-2 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center'> <FontAwesomeIcon className='text-danger' icon={faEarthAsia}></FontAwesomeIcon> 12</p>
                        <p className='text-muted'> Countries Covered</p>
                    </div>
                </div>
                <div className='col-6 col-lg-3 pt-2 bg-light border-color d-flex justify-content-center'>
                    <div>
                        <p className='fs-2 fw-bold text-center'> <FontAwesomeIcon className='text-danger' icon={faPeopleGroup}></FontAwesomeIcon> 25</p>
                        <p className='text-muted'> Years of Experiences</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;