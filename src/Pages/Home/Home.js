import React from 'react';
import { Carousel } from 'react-bootstrap';
import Car1 from '../../Images/Cars/Car 4.jpg';
import Car2 from '../../Images/Cars/Car 7.png';
import Car3 from '../../Images/Cars/Car 6.png';
import './Home.css';
import Products from '../Products/Products';
import Information from '../Information/Information';
import Partners from '../Partners/Partners';

const Home = () => {
    return (
        <div className='bg-dark'>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={Car1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={Car2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={Car3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Products className="mt-5"></Products>
            <Partners></Partners>
            <Information></Information>
        </div>
    );
};

export default Home;