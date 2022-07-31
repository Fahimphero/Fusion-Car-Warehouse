import React from 'react';
import { Carousel } from 'react-bootstrap';
import Car1 from '../../Images/Cars/Car 4.webp';
import Car2 from '../../Images/Cars/Car 7.webp';
import Car3 from '../../Images/Cars/Car 6.webp';
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
                        <h3>Explore Our Cars</h3>
                        <p>We reveal the world's best car brands based on the feedback from car owners</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={Car2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Explore Our Cars</h3>
                        <p>We reveal the world's best car brands based on the feedback from car owners</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={Car3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Explore Our Cars</h3>
                        <p>We reveal the world's best car brands based on the feedback from car owners</p>
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