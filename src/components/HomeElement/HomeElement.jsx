import React from 'react';
import Slide from './Slide';
import './HomeElement.css'
const HomeElement = () => {
    return (
        <>
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://placeimg.com/980/250/tech" className="d-block w-100" alt='...' />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/980/250/people" className="d-block w-100" alt='...' />
                        </div>
                        <div className="carousel-item">
                            <img src="https://placeimg.com/980/250/arch" className="d-block w-100" alt='...' />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className='container-fluid'>
                    <Slide />
                </div>
            </div>

        </>

    );
}

export default HomeElement;
