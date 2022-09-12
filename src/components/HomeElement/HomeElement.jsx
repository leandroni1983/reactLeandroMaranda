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
                            <img src="/assets/images/1.webp" className="d-block w-100" alt='...' />
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/images/2.webp" className="d-block w-100" alt='...' />
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/images/3.webp" className="d-block w-100" alt='...' />
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
                <div className='container-fluid m-5'>
                    <img src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/online/785X40.jpg"
                        title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago"
                        width="785" height="40" />
                </div>
                <div className='container-fluid'>
                    <Slide />
                </div>
            </div>

        </>

    );
}

export default HomeElement;
