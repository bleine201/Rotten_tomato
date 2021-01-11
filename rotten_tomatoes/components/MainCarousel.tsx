import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MainCarousel = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= "https://static.hitek.fr/img/actualite/ill_m/1609852057/spider-man-ps4-tenue-sam-raimi.jpg"  
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://static.hitek.fr/img/actualite/ill_m/1609852057/spider-man-ps4-tenue-sam-raimi.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://static.hitek.fr/img/actualite/ill_m/1609852057/spider-man-ps4-tenue-sam-raimi.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <style jsx>{`
            
                margin-left: auto;
                margin-right: auto;
                width:80%;
                
                `}    
            </style>
        </div>
    );
};

export default MainCarousel;